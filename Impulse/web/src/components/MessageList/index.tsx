import { useEffect, useState } from 'react';
import io from 'socket.io-client';
// API
import { api } from '../../services/api';

// Styles
import styles from './styles.module.scss';

// Images
import logoImage from '../../assets/logo.svg';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

const messagesQueue: Message[] = [];

const socket = io('http://localhost:4224');

socket.on("new_message", (newMessage: Message) => {
  console.log("new message: ", newMessage);
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean));

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data);
      console.log('Response Data: ', response.data)
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImage} alt="Logo DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((message, index) => {
          return (
            <li key={index} id={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <span className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span className={styles.messageUsername}>{message.user.name}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}