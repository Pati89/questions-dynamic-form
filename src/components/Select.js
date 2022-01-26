import PropTypes from "prop-types";
import styles from "../styles/components/Select.module.css";

const Select = (props) => {
  const { field, onChange, value } = props;

  const { name, label, options } = field;

  return (
    <div className={styles.selectField} data-testid="select">
      <label htmlFor={name}>{label}</label>
      <select
        {...props}
        type="text"
        id={`${name}-select`}
        name={name}
        onChange={(event) => onChange(event, name)}
        value={value || ""}
        data-testid="select-field"
      >
        <option value="" data-testid="select-option">
          --Please choose an option--
        </option>
        {options?.map((item, index) => (
          <option key={index} value={item} data-testid="select-option">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  field: PropTypes.object,
};

export default Select;
