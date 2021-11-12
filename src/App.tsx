import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./works/Projects";
import RemoteWork from "./remote work/RemoteWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Main/>
                <Projects/>
                <Skills/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
            </HashRouter>
        </div>
    );
}

export default App;
