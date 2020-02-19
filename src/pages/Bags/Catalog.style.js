import { css } from '@emotion/core'

export default {
  container:css`
    max-width: 1263px;
    padding: 0 20px;
    min-height: inherit;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 82px;
  `,

  catalogTitle:css`
    display: block;
    font-weight: 900;
    font-size: 48px;
    line-height: 59px;
    margin-bottom: 22px;
  `,

  blockItems:css`
    display: grid;
    grid-template-columns: repeat(auto-fill, 215px);
    justify-content: space-between;

    @media (max-width: 550px) {
      justify-content: center;
    }

    grid-gap:47px;
    min-height: 627px;
    padding-bottom: 71px;
  `,

  notFound:css`
    display: block;
    font-weight: 900;
    font-size: 48px;
    line-height: 59px;
    grid-column-start: 1;
    grid-column-end: 6;
    justify-self: center;
    align-self: center;
  `,
}