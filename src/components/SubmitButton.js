import PropTypes from "prop-types";
import styles from "../styles/components/SubmitButton.module.css";

const SubmitButton = ({ disabled, text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={styles.submitButton}
      data-testid="submit-button"
    >
      {text}
    </button>
  );
};

SubmitButton.defaultProps = {
  type: "submit",
  text: "Submit",
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};

export default SubmitButton;
