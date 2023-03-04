import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title text-center mb-8">
        <h2 className="flex items-center text-[2rem] justify-center font-medium  ">
          <span className="text-[0.85em] text-[#ba5d2c] font-bold mr-4 ">
            /
          </span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={title} className="person-img" />
              <h4 className="heading text-[0.875rem] uppercase text-[#ba5d2c] mb-1">
                {name}
              </h4>
              <p className="title">{title}</p>
              <p className="text max-w-[35em] my-0 mx-auto mt-8 leading-8 text-[#617d98] md:max-w-[45em]  ">
                {quote}
              </p>
              <FaQuoteRight className="icon text-5xl mt-4 text-[#ba5d2c] mx-auto" />
            </article>
          );
        })}
        <button className="prev left-0" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next right-0" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
