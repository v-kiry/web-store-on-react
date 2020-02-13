import { css } from '@emotion/core'

export default {
  container: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    margin-bottom: 44px;
    min-height: 40px;
    background-color: white;
  `,

  inputText: css`
    min-height: 20px;
    padding-left: 7px;
    padding-bottom: 3px;
    font-size: 15px;
    display: block;
    border: 1px solid #C4C4C4;

    ::placeholder {
      padding: 0;
      margin: 0;
      font-size: 15px;
      color: #b8b8b8;
    }
  `,

  inputImgSearch: css`
    display: block;
    margin-left: 5px;
  `,

  wrapInputText: css`
    display: flex;
    align-items: center;
  `,

  wrapInputRange: css`
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items:center;
    justify-content:space-between;
  `,

  inputValues: css`
    :first-of-type {
      margin-right: 15px;
    }

    :last-of-type {
      margin-left: 15px;
    }
  `,

  // inputRange: css`
  //   -webkit-appearance: none;
  //   margin: 10px 0;
  //   width: 100%;
  //   display: block;
  //   margin:0 5px;
  //   max-width: 120px;
  //   :focus {
  //     outline: none;
  //   }
  //   ::-webkit-slider-runnable-track {
  //     width: 100%;
  //     height: 3px;
  //     cursor: pointer;
  //     animate: 0.2s;
  //     box-shadow: 0px 0px 0px #000000;
  //     background: #FFC09D;
  //     border-radius: 0px;
  //     border: 0px solid #000000;
  //   }
  //   ::-webkit-slider-thumb {
  //     box-shadow: 0px 0px 1px #C4C4C4;
  //     border: 1px solid #C4C4C4;
  //     height: 15px;
  //     width: 15px;
  //     border-radius: 15px;
  //     background: #FFFFFF;
  //     cursor: pointer;
  //     -webkit-appearance: none;
  //     margin-top: -6.5px;
  //   }
  //   :focus::-webkit-slider-runnable-track {
  //     background: #FFC09D;
  //   }
  //   ::-moz-range-track {
  //     width: 100%;
  //     height: 3px;
  //     cursor: pointer;
  //     animate: 0.2s;
  //     box-shadow: 0px 0px 0px #000000;
  //     background: #FFC09D;
  //     border-radius: 0px;
  //     border: 0px solid #000000;
  //   }
  //   ::-moz-range-thumb {
  //     box-shadow: 0px 0px 1px #C4C4C4;
  //     border: 1px solid #C4C4C4;
  //     height: 15px;
  //     width: 15px;
  //     border-radius: 15px;
  //     background: #FFFFFF;
  //     cursor: pointer;
  //   }
  //   ::-ms-track {
  //     width: 100%;
  //     height: 3px;
  //     cursor: pointer;
  //     animate: 0.2s;
  //     background: transparent;
  //     border-color: transparent;
  //     color: transparent;
  //   }
  //   ::-ms-fill-lower {
  //     background: #FFC09D;
  //     border: 0px solid #000000;
  //     border-radius: 0px;
  //     box-shadow: 0px 0px 0px #000000;
  //   }
  //   ::-ms-fill-upper {
  //     background: #FFC09D;
  //     border: 0px solid #000000;
  //     border-radius: 0px;
  //     box-shadow: 0px 0px 0px #000000;
  //   }
  //   ::-ms-thumb {
  //     box-shadow: 0px 0px 1px #C4C4C4;
  //     border: 1px solid #C4C4C4;
  //     height: 15px;
  //     width: 15px;
  //     border-radius: 15px;
  //     background: #FFFFFF;
  //     cursor: pointer;
  //   }
  //   :focus::-ms-fill-lower {
  //     background: #FFC09D;
  //   }
  //   :focus::-ms-fill-upper {
  //     background: #FFC09D;
  //   }
  // `
}