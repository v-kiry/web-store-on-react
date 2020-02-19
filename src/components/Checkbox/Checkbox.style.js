import { css } from '@emotion/core'

export default {
  bodyCheckbox:css`
    display: flex;
    align-items: center;
  `,

  checkbox:css`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;

    & + label::after{
      content: none;
    }

    :checked + label::after{
      content: '';
    }

    &:focus + label::before {
      outline: -webkit-focus-ring-color auto 5px;
    }

    &:hover + label::before {
      outline: -webkit-focus-ring-color auto 5px;
    }
  `,

  labelCheckbox:css`
    position: relative;
    display:flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;

    ::before {
      content: "";
      height: 15px;
      width: 15px;
      border: 1px solid #C4C4C4;
      margin-right: 10px;
    }

    ::after{
      content: "";
      position: absolute;
      left: 5px;
      top: 5px;
      display: inline-block;
      height: 3px;
      width: 5px;
      border-left: 2px solid #FFC09D;
      border-bottom: 2px solid #FFC09D;
      transform: rotate(-45deg);
    }
  `,
}