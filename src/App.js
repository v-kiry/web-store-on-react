/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global, css } from '@emotion/core';
import './assets/fonts/fonts.css'

import Header from './components/Header';
import Main from './components/Main';

const bodyFillColor = `#FAFAFA`;

function App() {
  return (
   <div>
     <Global styles={css`
        body {
          background: ${bodyFillColor};
          font-family: 'Montserrat', sans-serif;
        }

        a {
          cursor: pointer;
          color: inherit;
          text-decoration: inherit;
        }
      `
      }
     />
     <div>
        <Header />
        <Main />
     </div>
   </div>
  );
}

export default  App;
