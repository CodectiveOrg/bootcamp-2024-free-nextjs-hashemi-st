import styles from "./progressBar.module.css";

type Props = {
  progress: number;
  color: string;
};

export default function ProgressBar({ progress, color }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.bar}
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
      <span className={styles.label}>{progress}%</span>
    </div>
  );
}
