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

export default function TabNav() {
  const { clicked, setClicked, activeComponent, setActiveComponent } = useContext(ButtonContext);
  // const [ activeComponent, setActiveComponent ] =  useState('home');

  // const [ clicked , setClicked ] = useState(true);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
    setClicked(!clicked);
  };

  return (
    <>
      <div className="tabbled-Nav">
        <div className="tabbed-nav-inner-Div">
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

          
        </div>
        {activeComponent === "home" && <Home />}
        {activeComponent === "about" && <About />}
        {activeComponent === "contact" && <Contact />}
        {activeComponent === "project" && <Project />}
        {activeComponent === "articles" && <Articles />}
        {activeComponent === "github" && <Github />}
      </div>
    </>
  );
}
