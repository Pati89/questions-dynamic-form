import PropTypes from "prop-types";
import styles from "../styles/components/Input.module.css";

const Input = (props) => {
  const { field, onChange, value } = props;

  const { name, label } = field;

  // We can add here a validation for correct field types and if required.
  // At the moment all field types are text type

  return (
    <div className={styles.inputField} data-testid="input">
      <label htmlFor={name}>{label}</label>
      <input
        {...props}
        type="text"
        id={`${name}-input`}
        name={name}
        onChange={(event) => onChange(event, field.name)}
        value={value || ""}
        data-testid="input-field"
      />
    </div>
  );
};

Input.propTypes = {
  field: PropTypes.object.isRequired,
};

export default Input;
