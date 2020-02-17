import { css } from '@emotion/core'

export default {
  container: css`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
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

  blockFilters: css`
    display: flex;
    width: 100%;
    align-items: center;
    border-left: 1px solid #C4C4C4;

    :first-of-type {
      border-left: 0;
      border-right: 0;
    }

    :last-of-type {
      border-left: 0;
      border-right: 0;
    }
  `,

    nameFilters: css`
      display: flex;
      padding: 0 20px;
      height: 100%;
      align-items: center;
      border-right: 1px solid #C4C4C4;
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
    `,

  wrapInputText: css`
    display: flex;
    align-items: center;
    padding: 0 20px;
  `,

  wrapInputRange: css`
    display: flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width: 100%;
    padding: 0 20px;
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
    width: 100%;
    height: 100%;
    padding: 0 20px;
  `,
}