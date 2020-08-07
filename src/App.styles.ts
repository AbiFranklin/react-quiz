import styled, { createGlobalStyle } from 'styled-components'
import BGImg from './images/background.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImg});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    `

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 60vw;

    > p {
        color: white;
    }

    h1 {
        font-family: 'Rowdies', cursive;
        background-image: linear-gradient(180deg, white, orange);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    h3, h3 a, .score {
        font-family: 'Rowdies', cursive;
        color: white;
        font-size: 30px;
        filter: drop-shadow(2px 2px #0085a3);
        margin-top: -10px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, white, orange);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 50px;
        margin: 20px 0;
        padding 0 20px;
        font-size: 1.2rem;
    }

    .start {
        max-width: 200px;
    }

    .footer {
        width: 20%;
        position: fixed;
        bottom: 10px;
        right: 0px;
    }
`
