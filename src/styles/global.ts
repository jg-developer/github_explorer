import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body{
    width: 100%;
    min-height: 100%;
    background: #E5E5E5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

    @media (max-width: 600px) {
      max-width: calc(100% - 40px);
      width: calc(100% - 20px);
      padding: 40px 0;
    }
  }
`;
