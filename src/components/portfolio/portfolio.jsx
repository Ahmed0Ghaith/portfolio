import React from "react";
import "./portfolio.css";
import hr from "../../assets/HR.png";
import crypto from "../../assets/crypto.png";
import car from "../../assets/cartp.png";
import news from "../../assets/newsf.png";
import khushoo3 from "../../assets/khushoo3.png";
import shipyfy from "../../assets/shipyfy.png";
import scanner from "../../assets/scanner.png";
import pos from "../../assets/POS.png";
import carweb from "../../assets/carweb.png";

// an array of data

const data = [
  {
    id: 1,
    image: hr,
    title: "HR-App",
    github: "",
    demo: "https://apps.apple.com/us/app/hr-al-seef/id1605339606",
        caption:"HR App contains 5 roles, manage all employers (Docs- vacations permissions)."

  },
  {
    id: 2,
    image: scanner,
    title: "Warehouse App",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.encore.wareshouse",
        caption:"warehouse APP by paired wireless scanner you can check Items details, picks , put away, movement , stocktake , locations"

  },
 
  {
    id: 4,
    image: pos,
    title: "Point of sale App ",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=eIS.Sales.App",
        caption:"SAAS APP point of sale display products, customers and making orders"


  },
  {
    id: 5,
    image: shipyfy,
    title: "Shipyfy  App",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.shipyfy",
        caption:"Shipping Flutter App-Web & WordPress Blog "

  },
  {
    id: 6,
    image: car,
    title: "Car parts App",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.aboaltaup.twbparts",
        caption:"e-commerce system has a dedicated dashboard (as an Android app) to control all users, admin roles, notifications, alerts, orders, products, loading from individual products or Excel, and a database control desktop application (CRUD)"

  },
  {
    id: 7,
    image: khushoo3,
    title: " Khushoo3 App",
    github: "https://github.com/Ahmed0Ghaith/Khushoo3-Xamarin",
    demo: "https://github.com/Ahmed0Ghaith/khushoo3-Flutter",
        caption:"an Islamic app that shows Azkar & by using API Determines prayer times And by location Determines qibla"

  }, {
    id: 3,
    image: carweb,
    title: "E-commerce car parts website",
    github: "",
    demo: "http://twbpart.com/",
        caption:" Angular website work as a part of e-commerce system for car parts  "

  },
  {
    id: 8,
    image: crypto,
    title: "Crypto Currency wallet",
    github: "https://github.com/Ahmed0Ghaith/CryptoCurrency-Xamarin",
    demo: "",
        caption:"UI/UX Design and developing a Crypto Currency wallet"

  },
  {
    id: 9,
    image: news,
    title: "News Feed App",
    github: "https://github.com/Ahmed0Ghaith/News-feed-app-example",
    demo: "",
    caption:"News Feed App featch data from public api and present it"
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Jobs</h5>
      <h2>Mobile & Web Portfolio</h2>
      <div className="container container_portfolio">
        {data.map(({ id, image, title, github, demo,caption }) => {
          return (
            <article key={id} className="article_item">
              <div className="div_port-image">
                <img className="imgheight" src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <small >{caption}</small>
              <div className="item-cta">
             { github!="">0&&
               <a href={github}  className="btn" target="_blank">
                  Github
                </a>
               } 
          {   demo!="">0&&  <a
                  href={demo}
                  className="btn btn_primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
                      }
                                    </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
