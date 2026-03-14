import React, { useEffect, useState } from "react";
import styles from "./loading.module.scss";
import Image from "next/image";

const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.loading} ${visible ? "" : styles.hidden}`}>
      <div className={styles.logoWrap}>
        <Image
          width={80}
          height={80}
          src="/images/logo.png"
          alt="CDEFF"
          priority
        />
      </div>
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
};

export default Loading;
