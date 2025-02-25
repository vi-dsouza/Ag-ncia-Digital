import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/SC.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img src={logo} alt="Logo" />
        <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
          <li onClick={() => handleMenuClick('inicio')}>Início</li>
          <li onClick={() => handleMenuClick('servicos')}>Serviços</li>
          <li onClick={() => handleMenuClick('sobre')}>Sobre</li>
          <li onClick={() => handleMenuClick('integrantes')}>Integrantes</li>
          <li onClick={() => handleMenuClick('contato')}>Contato</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
