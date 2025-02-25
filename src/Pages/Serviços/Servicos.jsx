import styles from './Servicos.module.css';

const Servicos = () => {
  const handleClick = (sectionId) =>{
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={styles.container}>
      <div>
        <br/>
        <h1>Nossos Serviços</h1>
        <br/>
      </div>
      <div className={styles.containerCard}>
        <div className={styles.cards}>
          <i className={`${styles.icon} fas fa-bullhorn`}></i>
          <h1>Marketing Digital</h1>
          <span className='fa fa-check'> Marketing de Conteúdo</span>
          <br/>
          <p>Criação de artigos, posts e materiais ricos.</p>
          <br/>
          <h2> Valores a combinar.</h2>
          <button className={styles.botao} onClick={() => handleClick('contato')}>Entre em contato</button>
        </div>

        <div className={styles.cards}>
          <i className={`${styles.icon} fas fa-laptop-code`}></i>
          <h1>Desenvolvimento</h1>
          <span className='fa fa-check'> Criação de Sites</span>
          <br/>
          <p>Sites institucionais, blogs e landing pages.</p>
          <br/>
          <h2> Valores a combinar.</h2>
          <button className={styles.botao} onClick={() => handleClick('contato')}>Entre em contato</button>
        </div>

        <div className={styles.cards}>
          <i className={`${styles.icon} fas fa-paint-brush`}></i>
          <h1>Design e Branding</h1>
          <span className='fa fa-check'> Identidade Visual</span>
          <br/>
          <p>Criação de logotipo, cores e marca para sua empresa.</p>
          <br/>
          <h2> Valores a combinar.</h2>
          <button className={styles.botao} onClick={() => handleClick('contato')}>Entre em contato</button>
        </div>
      </div>
    </div>
  )
}

export default Servicos;
