import styles from './Footer.module.css';
import logo from '../../assets/images/SC.png';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src={logo} alt="Souza & Co. Digital" />
        </div>
        <div className={styles.contato}>
            <h3>Fale Conosco</h3>
            <p>Rua República do Líbano, 1677 - Patrocínio, Minas Gerais</p>
            <p>(34) 99935-3881</p>
            <p>vistefanesouza@gmail.com</p>
        </div>
        <div className={styles.direitos}>
            <p>2025 Souza & Co. Digital. Todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer