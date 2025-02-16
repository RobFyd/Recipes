import { useContext } from "react";
import { Button } from "../Button/Button";
import styles from "./TopBar.module.css";
import { IsLoggedInStateContext } from "../../context/IsLoggedInStateContext";

export function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext);
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
