import styles from './Banner.module.css';
import banner from '../../assets/images/banner.png';

const Banner = () => {
  return (
      <div className={styles.containerBanner}>
        <img src={banner} alt="Banner" />
      </div>
    
  );
}

export default Banner;
