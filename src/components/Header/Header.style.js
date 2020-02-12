import { css } from '@emotion/core'
import busketImg from '../../assets/img/busket.png'

export default {
  header:css`
    min-height: 60px;
    background-color: white;
  `,

  container:css`
    max-width: 1263px;
    padding: 0 20px;
    min-height: inherit;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  headerNavBlock:css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 455px;
    width: 100%;
  `,

  headerLogo:css`
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  `,

  headerMenu:css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    max-width: 221px;
    font-size: 18px;
    line-height: 22px;
    width:100%;
    padding: 0;
    margin: 0;

    li a {
      :hover {
        ::after{
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background-color: black;
        }
      }
    }
  `,

  headerBasket:css`
    font-size: 16px;
    line-height: 20px;
    padding-right: 32px;
    background-image: url(${busketImg});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 20px 20px;
  `,

  basketPrice:css`
    color: #FFC09D;
  `,
}