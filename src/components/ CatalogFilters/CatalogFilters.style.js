import { css } from '@emotion/core'

export default {
  container: css`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0px 20px;
    margin-bottom: 44px;
    min-height: 50px;
    background-color: white;
    border: 1px solid #C4C4C4;
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

  nameFilters: css`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 20px;
    font-weight: bold;
    font-size: 16px;
    border-left: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;

    :first-of-type {
      padding-left: 0;
      border-left: 0;
      margin-left: 0;
    }
  `,

  wrapInputText: css`
    display: flex;
    align-items: center;
  `,

  wrapInputRange: css`
    width: 100%;
    max-width: 250px;
    margin: 0 20px;
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

  sortSexBlock: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 20px;
  `,
}