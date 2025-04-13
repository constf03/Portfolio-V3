"use client";
import React, { useEffect, useState } from "react";
import styles from "./LocationBar.module.css";

export default function LocationBar() {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setPath("/ Home");
        break;
      default:
        setPath(window.location.pathname);
    }
  }, [path]);

  return (
    <div className={styles.locationbar}>
      <span>Portfolio {path}</span>
    </div>
  );
}
