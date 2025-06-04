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
          <Mapa />
        </div>
        <Formulario />
      </div>
    </div>
  );
};

export default Contato;
