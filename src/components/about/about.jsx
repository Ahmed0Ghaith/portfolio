import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaMobile,FaNodeJs,FaCode,FaFigma} from "react-icons/fa";



const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>

      <h2>About Me</h2>
  <p className=" container my2">
        I am a talented and passionate developer ,
         working on converting your idea into a clean high-performance real project , using clean code of more than one technology neither  Web nor Mobile and in consideration of the scalability, readability,SEO and maintainability .    </p> 

      <div className="container about__container">  
       <div className="about__content"> 
            <h4 className="center_cap">Certificates</h4>

       <div className="expriance-card">
          
            <a href="https://www.freecodecamp.org/certification/ahmedghaith/foundational-c-sharp-with-microsoft"    target="_blank"
        rel="noreferrer" className="about__card start-text">
              <FaAward className="about__icon" />
              <h5 >Foundational C# </h5>
              <small>Issuing organization : Microsoft and FreeCodeCamp
</small>
            </a>{" "}
            <a href="https://www.freecodecamp.org/certification/ahmedghaith/responsive-web-design"    target="_blank"
        rel="noreferrer"className="about__card start-text">
              <FaAward className="about__icon" />
              <h5>Responsive Web Design</h5>
              <small>Issuing organization : FreeCodeCamp
</small>
            </a>
     
           
          </div>
        
     
        </div>
       <div className="about__content">
            <h4 className="center_cap">Experiance</h4>

       <div className="about__cards">
         
            <article className="about__card">
              <FaNodeJs className="about__icon" />
              <h5>Frontend </h5>
              <small>1 year Experience</small>
            </article>{" "}
            <article className="about__card">
              <FaMobile className="about__icon" />
              <h5>Mobile </h5>
              <small>4+ years Experience</small>
            </article>
            <article className="about__card">
              <FaCode className="about__icon" />
              <h5>Backend </h5>
              <small>2+ years Experience</small>
            </article>
              <article className="about__card">
              <FaFigma className="about__icon" />
              <h5>UI/UX Design</h5>
              <small>1+ years Experience</small>
            </article>
          </div>
        
          <a href="#contact"  className="btn btn_primary my2">
            Lets Talk
          </a>
        </div>    
        
      
      </div>
    </section>
  );
};

export default about;
