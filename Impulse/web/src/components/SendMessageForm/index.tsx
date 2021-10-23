import { FormEvent, useContext, useState } from 'react';

// Icons
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

// Authentication Context
import { AuthContext } from '../../contexts/auth';

// Server API
import { api } from '../../services/api';

// Styles
import styles from './styles.module.scss';

export function SendMessageForm() {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const handleSendMessage = async function (event: FormEvent) {
    event.preventDefault();

    if (!message.trim())
      return;

    await api.post("messages", { message });

    setMessage('');
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton} onClick={signOut}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={`User Profile Photo: ${user?.name}`} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual é a sua expectativa para o evento?"
          onChange={event => {
            setMessage(event.target.value);
          }}
          value={message}
        ></textarea>

        <button type="submit">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}