import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const services = [
  {
    icon: <FaCocktail />,
    Title: "Free cocktails",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum accusamus facere corporis asperiores esse commodi ",
  },
  {
    icon: <FaHiking />,
    Title: "Endless hiking",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum accusamus facere corporis asperiores esse commodi ",
  },
  {
    icon: <FaShuttleVan />,
    Title: "Free shuttle",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum accusamus facere corporis asperiores esse commodi ",
  },
  {
    icon: <FaBeer />,
    Title: "Strongest beer",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Harum accusamus facere corporis asperiores esse commodi ",
  },
];

const Services = () => {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
