import { css } from '@emotion/core'

export default {
  container: css`
    display: flex;
    align-items: stretch;
    margin-bottom: 44px;
    min-height: 50px;
    background-color: white;
    border: 1px solid #C4C4C4;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
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
      width:inherit;
    }

    @media (max-width: 500px) {
      width: 100%;
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

    @media (max-width: 1200px) {
      min-height: 50px;
      border-left: 0;
      border-bottom: 1px solid #C4C4C4;
    }

    @media (max-width: 500px) {
      flex-direction: column;
    }
  `,

  nameFilters: css`
    display: flex;
    padding: 0 20px;
    height: 100%;
    min-height: inherit;
    align-items: center;
    border-right: 1px solid #C4C4C4;
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;

    @media (max-width: 1200px) {
      border-left: 0;
    }

    @media (max-width: 500px) {
      border-right: 0;
      padding: 0;
      width: 100%;
      justify-content: center;
      border-bottom: 1px solid #C4C4C4;
    }
  `,

  wrapInputText: css`
    display: flex;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 1200px) {
      min-height: 50px;
      justify-content: flex-end;
    }
  `,

  wrapInputRange: css`
    display: flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width: 100%;
    padding: 0 20px;

    @media (max-width: 500px) {
      min-height: 50px;
      padding: 0;
      justify-content:center;
      width: 80%;
    }
  `,

  sortSexBlock: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    @media (max-width: 500px) {
      min-height: 50px;
      padding: 0;
      justify-content:center;
    }
  `,

  checkMale: css`
    margin-right: 20px;
  `,
}