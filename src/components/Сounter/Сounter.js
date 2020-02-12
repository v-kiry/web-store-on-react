/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from 'react';

import styles from './Сounter.style';

console.log(styles);

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        Минус
      </button>
      <p css={styles.textClass}> Количество {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Плюс
      </button>
    </div>
  );
}