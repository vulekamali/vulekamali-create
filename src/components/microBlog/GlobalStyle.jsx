import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .vulekamali-default-list-item-title {
    color: #243858 !important;
    font-size: 12px !important;
    font-family: Lato;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.01071em;
  }

  @media screen and (min-width: 650px) {
    .vulekamali-default-list-item-title {
      font-size: 14px !important;
    }
  }

  .vulekamali-default-list-item {
    overflow: hidden;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    background-color: #fff;
    border-radius: 4px !important;
    margin-bottom: 20px !important;
    padding: 20px !important;
  }

  .vulekamali-default-list-item-date {
    color: #8091a5 !important;
    font-size: 12px !important;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01071em;
  }

  @media screen and (min-width: 650px) {
    .vulekamali-default-list-item-date {
      font-size: 14px !important;
    }
  }

  .vulekamali-component-content {
    font-size: 14px !important;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01071em;
    color: #42526 !important;
  }

  #vulekamali [contenteditable="false"] {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .vulekamali-vote {
    display: static !important;
  }
`;

export default GlobalStyle;
