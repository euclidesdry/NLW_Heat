import { useContext } from "react";
import { VscGithubInverted } from "react-icons/vsc";

// Authentication Context
import { AuthContext } from "../../contexts/auth";

// API
import { api } from "../../services/api";

// Styles
import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl, user } = useContext(AuthContext);

  return (
    <h1 className={styles.loginBox}>
      <strong>Entre e compartilhe a sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24}/>
        Entrar com Github
      </a>

    </h1>

  );
}