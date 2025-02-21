import styles from './Sobre.module.css';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation.json';

const Sobre = () => {
  return (
    <div className={styles.container}>
        <div className={styles.principal}>
            <div className={styles.texto}>
                <h1>Quem somos nós?</h1>
                <p>Somos uma agência criada para ajudar você a alavancar sua empresa no meio digital. 
                  Por meio da construção de páginas que demonstram seus produtos, seus clientes terão 
                  um melhor acesso a todo o seu catálogo, tornando a experiência mais enriquecedora.
                  Você estará cada vez mais presente no meio digital e conseguirá alavancar ainda mais sua empresa com um site personalizado.
                </p>
            </div>
        
            <div className={styles.imagem}>
                <Lottie animationData={animationData} loop={true} />
            </div>
        </div>
    </div>
  )
}

export default Sobre;
