import styles from './Inicio.module.css';
import fundo from '../../assets/images/back.jpg';

const Inicio = () => {
  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <span className={styles.textoPrincipal}>
            Souza & Co. Digital
        </span>
        <h2>Impulsione sua empresa</h2>
        <button className={styles.botao} onClick={() => handleClick('contato')}>Fale com a gente!</button>
    </div>
  )
}

export default Inicio
