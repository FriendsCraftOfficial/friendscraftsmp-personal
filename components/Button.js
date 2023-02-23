import styles from "../src/styles/components/button.module.css";

function Button(props) {
  const { text, icon, link } = props;

  return (
    <div className={styles.button}>
        <button>
          <img src={icon} alt="" />
          {text}
        </button>
    </div>
  );
}
export default Button;
