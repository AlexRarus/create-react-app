import { createGlobalStyle } from 'styled-components';

export const GlobalStyleApp = createGlobalStyle<{ theme: any }>`  
  html {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: ${({ theme }) => theme?.background};
    color: ${({ theme }) => theme.color};
  }    
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0;
    padding: 0;   
    font-size: 14px;
    background-color: ${({ theme }) => theme?.background};
    color: ${({ theme }) => theme.color};
    width: 100%;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    margin: 0;
  }
  
  video {
    width: 100%;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  * {
    box-sizing: border-box;
  }
`;
