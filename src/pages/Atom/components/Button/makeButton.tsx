import styles from './styles.module.css';

export function makeButton(data: {
  label: string;
  style: string;
  image?: {
    src: string;
    alt: string;
    style?: string;
  };
  subText?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={data.style}
      onClick={() => {
        data.onClick && data.onClick();
      }}
    >
      {data.image && (
        <img
          src={data.image.src}
          alt={data.image.alt}
          className={data.image.style}
        />
      )}
      {data.subText ? (
        <div className={styles.sideBarTextContainer}>
          <div>{data.label}</div>
          <div>{data.subText}</div>
        </div>
      ) : (
        data.label
      )}
    </button>
  );
}
