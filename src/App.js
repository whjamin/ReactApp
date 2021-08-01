import React, { Component } from 'react';
import './App.css';
import icon from './icon.png';
import google from './google.png';
import search from './search.png';
import keyboard from './keyboard.png';
import voice from './voice.png';
import profile from './profile.png';

class Header extends Component
{
    render()
    {
        return(
            <div className = "header-container">
                <nav className = "menu-wrap">
                    <a href = "#">Gmail</a>
                    <a href = "#">이미지</a>
                    <a href = "#"><img src = {icon} width = "15" height = "15"/></a>
                    <a href = "#"><img src = {profile} width = "32"/></a>
                </nav>
            </div>
        );
    }
}

class Body extends Component
{
    render()
    {
        return(
            <div className = "body-container">
                <div className = "body-wrap">
                    <img src = {google}/>
                    <div className = "input-wrap">
                        <div className = "input-box">
                            <img src = {search} width = "15" height = "15" className = "search"/>
                            <input name = "input" autoComplete = "off"/>
                            <img src = {keyboard} width = "20" className = "keyboard"/>
                            <img src = {voice} width = "22" className = "voice"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Footer extends Component
{
    render()
    {
        return(
            <div className = "footer-container">
                <p>대한민국</p>
                <p></p>
            </div>
        );
    }
}

class App extends Component
{
    render()
    {
        return(
            <div className = "main-container">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default App;