import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <p>
        Developed by <b>Patrycja Banaszczyk</b>
      </p>
    </footer>
  );
};

export default Footer;
