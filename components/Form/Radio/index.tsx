import { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";

//STYLES
import styles from "./radio.module.css";

//TYPES
interface RadioProps {
  id: string;
  name: string;
  value?: any;
  label?: string;
  radioSelect?: any;
  setRadioSelect?: any;
  classNamesOptional?: any;
}

const Radio = ({
  id,
  name,
  value,
  label,
  radioSelect,
  setRadioSelect,
  classNamesOptional,
}: RadioProps) => {
  //REF DOM COMPONENT
  const radioRef = useRef(null);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const valueRadio = radioRef.current.value;
    if (valueRadio === radioSelect) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [radioSelect]);

  const onChange = useCallback((e) => {
    const value = e.target.value;

    setRadioSelect(value);
  }, []);

  return (
    <div className={classNames(styles.container, classNamesOptional)}>
      <input
        ref={radioRef}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />

      <div
        className={styles["radio-custom"]}
        onClick={() => {
          radioRef.current.click();
        }}
      >
        {checked ? <div /> : <></>}
      </div>

      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
