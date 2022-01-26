import { useState } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { idFormatter } from "./helpers/idFormatter";
import styles from "./styles/App.module.css";
import data from "./data.json";

const App = () => {
  const [values, setValues] = useState({});

  const handleChange = (event, id) => {
    let newValues = { ...values };
    newValues[id] = event.target.value;

    setValues(newValues);
  };

  const formattedValues = Object.keys(values).reduce(
    (acc, key) => ({ ...acc, [idFormatter(key)]: values[key] }),
    {}
  );

  const handleSubmit = () => {
    alert(JSON.stringify(formattedValues, null, 4));
  };

  return (
    <>
      <div className={styles.app}>
        <div className={styles.appContent}>
          <header className={styles.appHeader}>
            <h1>Questions</h1>
          </header>
          <Form
            onSubmit={handleSubmit}
            questions={data.questions}
            values={values}
            handleChange={handleChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
