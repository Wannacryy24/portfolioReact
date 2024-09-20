import { useScroll } from "framer-motion";
import React, { useContext, useState } from "react";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Project from "./Component/Project/Project";
import Articles from "./Component/Articles/Articles";
import Github from "./Component/Github/Github";
import Image from "./Component/MiniComponent/Image";
import "./tabnav.css";
import { ButtonContext } from "./ButtonContext";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "./Component/PageNotFound/PageNotFound";

export default function TabNav() {
  const { clicked, setClicked, activeComponent, setActiveComponent } = useContext(ButtonContext);
  
  const navigate = useNavigate();

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
    setClicked(!clicked);
    // navigate(`/${componentName}`);
    //isse nahi ho payega q ki humko nested component ko render karana hai link tag use karke
  };

  return (
    <>
      <div className="tabbled-Nav">
        <div className="tabbed-nav-inner-Div">
          <Link to='/Home' className="link-home-tab-nav">
            <div
              className={
                activeComponent === "home"
                ? "tabbed-really-clicked"
                : "tabbed-clicked"
              }
              onClick={() => handleButtonClick("home")}
            >
              <Image
                src={"/react.svg"}
                className={"tabbed-home-img tabbed-img"}
                />
              <p className="tabbed-btn">home.jsx</p>
            </div>
          </Link>


          <Link to='About' className="link-home-tab-nav">
            <div
              onClick={() => handleButtonClick("about")}
              className={
                activeComponent === "about"
                ? "tabbed-really-clicked"
                : "tabbed-clicked"
              }
              >
              <Image
                src={"/html_icon.svg"}
                className={"tabbed-about-img tabbed-img"}
                />
              <p className="tabbed-btn">about.html</p>
            </div>
          </Link>

          <Link to='Contact' className="link-home-tab-nav">
            <div
              onClick={() => handleButtonClick("contact")}
              className={
                activeComponent === "contact"
                ? "tabbed-really-clicked"
                : "tabbed-clicked"
              }
              >
              <Image
                src={"/css_icon.svg"}
                className={"tabbed-contact-img tabbed-img"}
                />
              <p className="tabbed-btn">contact.css</p>
            </div>
          </Link>



          <Link to='Project' className="link-home-tab-nav">
            <div
              onClick={() => handleButtonClick("project")}
              className={
                activeComponent === "project"
                ? "tabbed-really-clicked"
                : "tabbed-clicked"
              }
              >
              <Image
                src={"/js_icon.svg"}
                className={"tabbed-project-img tabbed-img"}
                />
              <p className="tabbed-btn">projcet.js</p>
            </div>
          </Link>


          <Link to={'Articles'} className="link-home-tab-nav">
            <div
              onClick={() => handleButtonClick("articles")}
              className={
                activeComponent === "articles"
                ? "tabbed-really-clicked"
                : "tabbed-clicked"
              }
              >
              <Image
                src={"/json_icon.svg"}
                className={"tabbed-articles-img tabbed-img"}
                />
              <p className="tabbed-btn">skills.json</p>
            </div>
          </Link>


          <Link to={'Github'} className="link-home-tab-nav">
            <div
              onClick={() => handleButtonClick("github")}
              className={
                activeComponent === "github"
                ? "tabbed-really-clicked"
                : "tabbed-clicked"
              }
              >
              <Image
                src={"/markdown_icon.svg"}
                className={"tabbed-github-img tabbed-img"}
                />
              <p className="tabbed-btn">github.md</p>
            </div>
          </Link>
        </div>
        { 
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/Project' element={<Project />}/>
            <Route path='/Articles' element={<Articles />}/>
            <Route path='/Github' element={<Github />}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        }

        {/* ye shuru me use kiya tha fir nested Routing karni padi thi to Routes ka use kiya tha */}
        {/* {activeComponent === "home" && <Home />} */}
        {/* {activeComponent === "about" && <About />} */}
        {/* {activeComponent === "contact" && <Contact />} */}
        {/* {activeComponent === "project" && <Project />} */}
        {/* {activeComponent === "articles" && <Articles />} */}
        {/* {activeComponent === "github" && <Github />} */}
      </div>
    </>
  );
}
