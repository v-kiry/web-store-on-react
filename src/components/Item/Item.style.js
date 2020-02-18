import { css } from '@emotion/core'

export default {
  blockItem:css`
    width: 100%;
    max-width: 215px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 46px;
  `,

  imgItem:css`
    display: block;
    max-width: inherit;
    height: 223px;
    object-fit: cover;
    border: 1px solid #C4C4C4;
  `,

  nameItem:css`
    display: block;
    margin-top: 9px;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  `,

  priceItem:css`
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  `,
}