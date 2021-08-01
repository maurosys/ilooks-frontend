//STYLES
import styles from "./divisorText.module.css";

//TYPES
interface DivisorTextProps {
  text?: string;
}

const DivisorText = ({ text = "Text" }: DivisorTextProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.containerText}>{text}</div>
      <div className={styles.line} />
    </div>
  );
};

export default DivisorText;
