import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import VersionTwo from './VersionTwo'
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import styled from 'styled-components'

const Nav = styled.div`
    font-family: 'Rowdies', cursive;
    background-image: linear-gradient(180deg, white, orange);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
`

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav>
                <Link to="/">Original</Link> |{' '}
                <Link to="/version2">Version 2</Link>
            </Nav>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/version2" component={VersionTwo} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
