/** @jsx jsx */
import { jsx } from "@emotion/core";

import styles from './Button.style';

export default function Button(props) {
  return(
    <button css={styles.button} style={props.styles} onClick={props.click}>{props.text}</button>
  );
}