/** @jsx jsx */
import { jsx } from "@emotion/core";

import styles from './Checkbox.style';

export default function Checkbox(props) {

  return(
    <div css={styles.bodyCheckbox}>
      <input css={styles.checkbox} id={props.value} type="checkbox" value={props.value} checked={props.checked} onChange={props.onChange}/>
      <label css={styles.labelCheckbox} htmlFor={props.value}><span>{props.text}</span></label>
    </div>
  );
}