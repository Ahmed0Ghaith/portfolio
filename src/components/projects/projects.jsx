import React from "react";
import "./projects.css";
import pos from "../../assets/CompuPOS.png";
import hr from "../../assets/hr.png";
import doctor from "../../assets/qme.png";
import fixer from "../../assets/fixer.png";


const projects = [
  {
    id: 1,
    image: pos,
    title: "Promaster POS",
    company: "Compu Master",
    description:
      "ERP-integrated Point of Sale solution built with .NET MAUI. Worked on white-label customization, offline synchronization, performance optimization, and UI consistency.",
    tech: ".NET MAUI • C# • SQLite • REST API • ERP",
  },
  {
    id: 2,
    image: pos,
    title: "White-Label eCommerce Platform",
    company: "Compu Master",
    description:
      "Developed and customized enterprise eCommerce applications for multiple clients with scalable architecture and reusable components.",
    tech: ".NET MAUI • ASP.NET Core • SQL Server",
  },
  {
    id: 3,
    image: hr,
    title: "QME Clinic Booking",
    company: "Daldart",
    description:
      "Migrated the complete application from Xamarin.Forms to Flutter while improving architecture, maintainability, and UI performance.",
    tech: "Flutter • Bloc • REST API • Firebase",
  },
  {
    id: 4,
    image: doctor,
    title: "Doctor Business",
    company: "Daldart",
    description:
      "Business management platform for healthcare professionals with appointment management and workflow optimization.",
    tech: "Flutter • Firebase • REST API",
  },
  {
    id: 5,
    image: fixer,
    title: "Fixawy & Fixer",
    company: "Daldart",
    description:
      "Production home-services platform. Added new features, improved user experience, fixed complex issues, and optimized application performance.",
    tech: "Flutter • Firebase • Maps • Notifications",
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>Professional Experience</h5>
      <h2>Enterprise Projects</h2>

      <div className="container projects__container">
        {projects.map((project) => (
          <article className="project__card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project__content">
              <h3>{project.title}</h3>
              <small>{project.company}</small>

              <p>{project.description}</p>

              <span className="project__tech">
                {project.tech}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;