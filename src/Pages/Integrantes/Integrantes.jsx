import styles from './Integrantes.module.css';
import foto from '../../assets/images/foto.jpg';
import { Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Integrantes = () => {
  return (
    <div className={styles.container}>
        <h1>Integrantes</h1>
        <main className={styles.card}>
            <img src={foto} alt="Foto de perfil" />
            <div className={styles.info}>
                <h2>Vitória Stéfane de Souza</h2>
                <p>CEO e Desenvolvedora Front-end</p>
                <div className={styles.redes}>
                    <a href={import.meta.env.VITE_WHATSAPP} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={styles.icones} />
                    </a>
                    <a href={import.meta.env.VITE_INSTAGRAM} target="_blank" rel="noopener noreferrer">
                        <Instagram className={styles.icones} />
                    </a>
                    <a href={import.meta.env.VITE_EMAIL}>
                        <MdEmail className={styles.icones} />
                    </a>
                    <a href={import.meta.env.VITE_LINKEDIN}>
                        <Linkedin className={styles.icones} />
                    </a>
                </div>
            </div>
        </main>
    </div>
  );
};

export default Integrantes;
