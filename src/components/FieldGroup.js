import PropTypes from "prop-types";
import Input from "./Input";
import Select from "./Select";
import styles from "../styles/components/FieldGroup.module.css";

const FieldGroup = (props) => {
  const { fields, title, values, handleChange } = props;

  return (
    <div className={styles.fieldGroup} data-testid="field-group">
      <h2>{title}</h2>
      {fields?.map((item, index) =>
        item.type === "text" ? (
          <Input
            key={index}
            field={item}
            value={values[item.name]}
            onChange={handleChange}
          />
        ) : (
          <Select
            key={index}
            field={item}
            value={values[item.name]}
            onChange={handleChange}
          />
        )
      )}
    </div>
  );
};

FieldGroup.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.array,
};

export default FieldGroup;
