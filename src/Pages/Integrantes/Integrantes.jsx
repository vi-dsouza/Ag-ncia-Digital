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
                    <a href={"https://wa.me/5534999353881"} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={styles.icones} />
                    </a>
                    <a href={"https://www.instagram.com/vi.dsouza"} target="_blank" rel="noopener noreferrer">
                        <Instagram className={styles.icones} />
                    </a>
                    <a href="mailto:vistefanesouza@gmail.com">
                        <MdEmail className={styles.icones} />
                    </a>
                    <a href={"https://www.linkedin.com/in/vit%C3%B3ria-st%C3%A9fane-de-souza-1b100a1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                        <Linkedin className={styles.icones} />
                    </a>
                </div>
            </div>
        </main>
    </div>
  );
};

export default Integrantes;
