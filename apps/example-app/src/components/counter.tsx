import { createSignal } from "solid-js";

import styles from "./counter.module.css";

export function Counter() {
  const [count, setCount] = createSignal(0);
  const incrementCounter = () => setCount(count() + 1);

  return (
    <button class={styles.increment} type="button" onClick={incrementCounter}>
      {count()}
    </button>
  );
}
