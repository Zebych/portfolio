import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./works/Projects";
import PastExperience from "./about me/PastExperience";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
                <Header/>
                <Main/>
                <Projects/>
                <Skills/>
                <PastExperience/>
                <Contacts/>
                <Footer/>
        </div>
    );
}

export default App;
