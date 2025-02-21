import styles from "./Contato.module.css";
import Mapa from "../../components/Mapa/Mapa";
import Formulario from "../../components/Formulario/Formulario";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Linkedin } from "lucide-react";
import { MdEmail } from "react-icons/md";

const Contato = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texto}>
        <h1>Quer saber mais?</h1>
        <p>Fale conosco e descubra como podemos te ajudar.</p>
      </div>

      <div className={styles.contatos}>
        <div className={styles.colunaEsquerda}>
          <div className={styles.redes}>
            <h2>Nossas Redes</h2>
            <div className={styles.iconesContainer}>
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
          <Mapa />
        </div>
        <Formulario />
      </div>
    </div>
  );
};

export default Contato;
