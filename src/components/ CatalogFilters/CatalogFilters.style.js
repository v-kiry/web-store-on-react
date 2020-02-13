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
    max-width: 250px;
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
}