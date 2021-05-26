import React, { useState } from "react";
import "./styles.css";
import images from "./images.json";
const rand = () => Math.floor(Math.random() * images.length); // returns a random integer from 0 to 9

const initialIndex = rand();
export default function App() {
  const [image, setImage] = useState({
    index: initialIndex,
    ...images[initialIndex]
  });
  const [history, setHistory] = useState([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "400px"
      }}
    >
      {history.map((img) => (
        <img alt="" src={img.url} />
      ))}
      <img
        style={{
          cursor: "pointer"
        }}
        alt=""
        src={image.url}
        onClick={() => {
          const newHistory = [...history, image];
          setHistory(newHistory);
          let index = images.findIndex((img, i) =>
            img.tags.some((t) =>
              image.tags.some(
                (tt) =>
                  t === tt && !newHistory.some((himage) => himage.index === i)
              )
            )
          );
          setImage({ index, ...images[index] });
        }}
      />
    </div>
  );
}
