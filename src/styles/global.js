import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
      font-family: 'Poppins', sans-serif;
        background-color: #F1FFE7;
        color: #312F2F;
    }
  ::-webkit-scrollbar {
    width:10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background:#312F2F;
  }

  ::-webkit-scrollbar-thumb {
    background: #44CF6C;
    border-radius: 10px;
  }

    a{
        text-decoration: none;
        color: #312F2F;
    }

    html, body, #boby {
        height: 100%;
    }


    img {
        display: block;
        /* max-width: 100%; */
    }
    button, input {
        display: block;
        font-size: 1rem!important;
    }

    .container {
        max-width: 65rem;
        padding: 0 .8rem;
        margin: 0 auto;
        padding-bottom: 5rem;
    }

    .select:after {
      content: "";
      display: block;
      width: 100%;
      background-color: #44CF6C;
      height: 2px;
    }

`;