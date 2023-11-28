import React, { useEffect, useState } from "react";
import styles from "./loading.module.scss";
import loadingAnimation from "public/assets/dots-loading.svg";
import Image from "next/image";

const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulating hydration delay with a setTimeout
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.loading} ${visible ? "" : styles.hidden}`}>
      <Image
        width={70}
        height={70}
        src={loadingAnimation}
        alt="Loading Animation"
      />
    </div>
  );
};

export default Loading;
