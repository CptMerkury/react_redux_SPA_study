import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Profile from "./Components/Profile/Ptofile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import Friends from "./Components/Friends/Friends";
import DialogContainer from "./Components/Dialogs/DialogContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile />}
                />
                <Route
                    path='/dialogs'
                    render={() => <DialogContainer />}
                />
                <Route path='/news'
                       render={() => <News/>}
                />
                <Route path='/music'
                       render={() => <Music/>}
                />
                <Route path='/setting'
                       render={() => <Setting/>}
                />
                <Route path='/friends'
                       render={() => <Friends/>}
                />
            </div>
        </div>
    );
}


export default App;
