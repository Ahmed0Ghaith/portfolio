import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3i.jpg";
import IMG4 from "../../assets/portfolio3.png";
import IMG5 from "../../assets/fintech.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
// an array of data

const data = [
  {
    id: 1,
    image: "https://play-lh.googleusercontent.com/Bm37FCLn0cZ0CxjrXgAF6HJMQZ8hK3a-kjbKPExpPcmvRjoiDtL7wgEE966EZszsDpt6=w480-h960-rw",
    title: "HR-App",
    github: "",
    demo: "https://apps.apple.com/us/app/hr-al-seef/id1605339606",
  },
  {
    id: 2,
    image: IMG2,
    title: "Warehouse App",
    github: "https://github.com/samstickkz",
    demo: "https://www.tiktok.com/@obong_samjoe/video/7220823810583334150",
  },
  {
    id: 3,
    image: IMG3,
    title: "Point of sale App ",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=eIS.Sales.App",
  },
  {
    id: 4,
    image: "https://play-lh.googleusercontent.com/3JulDroPeOQ6vLSCGgyOlGZkLFtH7-8q1nsMo6vYAL9aXG5YJdk0gMCEnLo0Z7RDgQ=w5120-h2880-rw",
    title: "Shipyfy  App",
    github: "https://github.com/samstickkz",
    demo: "https://www.tiktok.com/@obong_samjoe/video/7119517496012524805",
  },
  {
    id: 5,
    image: IMG5,
    title: "Fintech Website",
    github: "https://github.com/samstickkz/fintech",
    demo: "https://fintech-by-sam.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Flight Booking App",
    github: "https://github.com/samstickkz",
    demo: "https://www.tiktok.com/@obong_samjoe/video/7181487378157194502",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Jobs</h5>
      <h2>Mobile & Web Portfolio</h2>
      <div className="container container_portfolio">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="article_item">
              <div className="div_port-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="item-cta">
             { github!="">0&&
               <a href={github}  className="btn" target="_blank">
                  Github
                </a>
               } 
               <a
                  href={demo}
                  className="btn btn_primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
