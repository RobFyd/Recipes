import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>React recipes</span>
      {isLoggedIn ? (
        <>
          <span className={styles.span}>Logged in</span>
          <Button onClick={() => setIsLoggedIn(false)}>Log out</Button>
        </>
      ) : (
        <Button onClick={() => setIsLoggedIn(true)}>Log in</Button>
      )}
    </div>
  );
}
