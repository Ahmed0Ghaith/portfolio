import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaMobile,FaNodeJs,FaCode,FaFigma} from "react-icons/fa";



const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>

      <h2>About Me</h2>
 <p className="container my2">
  I'm a Senior Cross-Platform Developer with 6+ years of experience building high-performance mobile and desktop applications using .NET MAUI, Flutter, Xamarin, and ASP.NET Core.
  <br /><br />
  I specialize in modernizing legacy applications, designing scalable architectures, and delivering clean, maintainable code. I enjoy solving complex technical challenges, optimizing performance, and creating intuitive user experiences for enterprise and commercial products.
</p>
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
      <div className="about__cards">
  <article className="about__card">
    <FaMobile className="about__icon" />
    <h5>Cross-Platform (Flutter & MAUI)</h5>
    <small>6+ Years</small>
  </article>

  <article className="about__card">
    <FaCode className="about__icon" />
    <h5>.NET & APIs</h5>
    <small>4+ Years</small>
  </article>

  

  <article className="about__card">
    <FaFigma className="about__icon" />
    <h5>UI/UX</h5>
    <small>Performance & Polish</small>
  </article>
</div>  
        
      
      </div>
    </section>
  );
};

export default about;
