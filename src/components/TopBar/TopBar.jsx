import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";

export function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>React recipes</span>
      {isLoggedIn ? (
        <>
          <span className={styles.span}>Logged in</span>
          <Button
            className={styles.button}
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </Button>
        </>
      ) : (
        <Button className={styles.button} onClick={() => setIsLoggedIn(true)}>
          Zaloguj
        </Button>
      )}
    </div>
  );
}
