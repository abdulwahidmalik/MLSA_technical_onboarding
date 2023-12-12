/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/student.jpg";

const imageAltText = "dest image of a desk with a laptop, notebook, and coffee";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tic-Tac-oe-game-python-Project",
    description:
      "This tic tac toe game is designed using min-max Algorithm and it’s an unbeatable game that is coded in python. The first choice will always be taken by bot. The bot will use “X” symbol. The game can only be won by the bot or it will be drawn. You can use number from 1 to 9, positions are as follow: 1, 2, 3 4, 5, 6 7, 8, 9.",
    url: "https://github.com/abdulwahidmalik/Tic-Tac-oe-game-python-Project",
  },
  {
    title: "Invest with Intelligence",
    description:
      "In this project, we aim to build a web-based application that predicts the Success of a startup or business using a machine learning model",
    url: "https://github.com/abdulwahidmalik/invest_with_intelligence",
  },
  {
    title: "Resume Site",
    description:
      " I Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://orange-river-056c3f700.4.azurestaticapps.net/",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
