import Image from "next/image";
import Image01 from "@/public/images/ico_google.png";
import styles from "./Search.module.css";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState<string>("");

  function handleSubmit() {
    location.href = `http://google.com/search?q=${query}`;
  }

  return (
    <div className={styles.search_wrapper}>
      <Image
        src={Image01}
        width={32}
        height={32}
        alt="google"
        className={styles.google_ico}
      />
      <div className={styles.search_input_form}>
        <input
          type="search"
          placeholder="Search with Google..."
          className={styles.search_google}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}
