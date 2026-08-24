"use client";

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
    <div className={`flex flex-col items-center justify-center gap-6 w-full h-screen bg-white fixed top-0 left-0 z-loading transition-opacity duration-slow ease-smooth ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className={styles.logoWrap}>
        <Image
          width={80}
          height={80}
          src="/images/logo.webp"
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
