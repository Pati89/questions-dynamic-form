import PropTypes from "prop-types";
import FieldGroup from "./FieldGroup";
import SubmitButton from "./SubmitButton";
import styles from "../styles/components/Form.module.css";

const Form = (props) => {
  const { onSubmit, disabled, questions, values, handleChange } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit} data-testid="form">
      <div className={styles.formControl}>
        {questions?.map(({ title, fields }, index) => (
          <FieldGroup
            key={index}
            fields={fields}
            title={title}
            values={values}
            handleChange={handleChange}
          />
        ))}
      </div>
      <SubmitButton disabled={disabled} />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  questions: PropTypes.array,
  disabled: PropTypes.bool,
};

export default Form;
