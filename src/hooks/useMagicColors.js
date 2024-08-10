import React, { useEffect, useState } from "react";

const listColorChange = ["red", "yellow", "blue", "gray", "pink", "green"];
const useMagicColors = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * listColorChange.length);
      setColor(listColorChange[randomIndex]);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return color;
};

export default useMagicColors;
