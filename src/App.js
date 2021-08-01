import React, { Component } from 'react';
import './App.css';

class Header extends Component
{
    render()
    {
        return(
            <div>
                안녕
            </div>
        );
    }
}

class App extends Component
{
    render()
    {
        return(
            <div>
                <Header/>
            </div>
        );
    }
}

export default App;