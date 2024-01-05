import React, { useRef, useEffect } from "react";

const Content = () => {
  const myRef = useRef(null);
  const bodyElement = document.querySelector("body");

  function rng() {
    const randomNumber = Math.floor(Math.random() * 255 + 1);
    return randomNumber;
  }

  function randomColor() {
    return `rgb(${rng()}, ${rng()}, ${rng()})`;
  }

  function bodyColor() {
    bodyElement.style.backgroundColor = randomColor();
  }

  useEffect(() => {
    myRef.current.addEventListener("click", () => {
      bodyElement.style.backgroundColor = randomColor();
    });
    return () => {
      myRef.current.removeEventListener("click", () => {
        bodyElement.style.backgroundColor = randomColor();
      });
    };
  });

  return (
    <main>
      <button id="color-generator" ref={myRef}>
        Generate Color 1
      </button>
      <button id="color-generator" onClick={() => bodyColor()}>
        Generate Color 2
      </button>
    </main>
  );
};

export default Content;
