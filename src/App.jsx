import Topbar from './component/topbar/Topbar'
import Intro from './component/intro/Intro'
import Certification from './component/certification/Certification'
import Experience from './component/experience/Experience'
import Projects from './component/projects/Projects'
import Contact from './component/contact/Contact'
import Menu from './component/menu/Menu'
import './app.scss'
import { useState, useEffect } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar openMenu = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu openMenu = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="section">
        <Intro />
        <Experience openMenu = {menuOpen}/>
        <Certification openMenu = {menuOpen}/>
        <Projects openMenu = {menuOpen}/>
        {/* <Contact openMenu = {menuOpen}/> */}
      </div>
    </div>
  );
}

export default App;
