/** @jsx jsx */
import { jsx } from "@emotion/core";
import Slider from "@material-ui/core/Slider";
import { withStyles } from '@material-ui/core/styles';

import styles from './InputRange.style';

const ShopSlider = withStyles({
  thumb: {
    backgroundColor: '#FFC09D',
    '&:hover': {
      boxShadow: '0px 0px 0px 8px rgba(255, 192, 157, 0.16);',
    },

    '&$active': {
      boxShadow: '0px 0px 0px 14px rgba(255, 192, 157, 0.16);',
    },

    '&$focusVisible': {
      boxShadow: '0px 0px 0px 8px rgba(255, 192, 157, 0.16) !important;',
    },
  },

  focusVisible: {},

  active: {},

  valueLabel: {
    color: '#FFC09D',
  },

  track: {
    color: '#FFC09D',
  },

  rail: {
    color: '#d8d8d8',
  },
})(Slider);

export default function InputRange(props) {

  function valueLabelFormat(value) {
    return `$${value}`;
  }

  return(
    <div css={styles.sliderStyle}>
      <ShopSlider
        value={props.value}
        min={props.min}
        max={props.max}
        step={25}
        onChange={props.onChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        valueLabelFormat={valueLabelFormat}
      />
    </div>
  )
}