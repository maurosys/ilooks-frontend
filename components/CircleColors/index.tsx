//STYLES
import styles from "./circleColors.module.css";

//TYPES
interface CircleColors {
  color?: string;
  active?: boolean;
  onClick?: (args: any) => void;
}

const CircleColors = ({
  color = "black",
  active = false,
  onClick,
}: CircleColors) => {
  return (
    <div
      className={styles.container}
      style={
        active
          ? {
              border: "1px solid black",
            }
          : {}
      }
      onClick={onClick}
    >
      <div className={styles.content} style={{ background: color }}></div>
    </div>
  );
};

export default CircleColors;
