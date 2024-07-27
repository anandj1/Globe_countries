import { useState, useEffect } from "react";
import '../App.css';

export default function Header() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('State')));
  if(!dark){
    document.body.classList.remove('dark')
    document.body.style.color = "black"
  }
  if(dark){
    document.body.classList.add('dark')
    document.body.style.color = "white"
  }
   
  

 

 

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
                                                      setDark(!dark);
                                                      localStorage.setItem('State',!dark)}}>
          <i className={dark? ("fa-solid fa-sun"):("fa-regular fa-moon")} />
          &nbsp;&nbsp;{dark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}
