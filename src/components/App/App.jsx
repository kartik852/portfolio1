import React from 'react';
import "./App.css";
import { HashRouter,Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';


const App=()=>{
  return <div>
  <HashRouter>
        <div>
        <NavBar/>
         
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills}/>
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact}/>
        <GoHome/>


        </div>


      </HashRouter>


  </div>
}

export default App;