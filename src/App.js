import { useListState } from "@mantine/hooks";

import "./styles.css";
import imageOne from "../public/assets/imageOne.jpeg";
import imageTwo from "../public/assets/imageTwo.jpeg";
import imageThree from "../public/assets/imageThree.jpeg";
import imageFour from "../public/assets/imageFour.jpeg";
import imageFive from "../public/assets/imageFive.jpeg";
import { useState } from "react";
const data = {
  images: [
    {
      id: 1,
      src: imageOne,
      title: "The summer and the tree",
      favToggle: false
    },
    {
      id: 2,
      src: imageTwo,
      title: "The yellow grain",
      favToggle: false
    },
    {
      id: 3,
      src: imageThree,
      title: "What has been left on this earth",
      favToggle: false
    },
    {
      id: 4,
      src: imageFour,
      title: "The water and waterfall",
      favToggle: false
    },
    {
      id: 5,
      src: imageFive,
      title: "Very beautiful scenery",
      favToggle: false
    }
  ]
};
export default function App() {
  const [favoriteList, setFavoriteList] = useListState([]);

  const toggleHandler = (e, id) => {};
  return (
    <div className="App">
      <div className="Container">
        {data.images.map((image) => {
          return (
            <>
              <img src={image.src} alt={image.alt} className="Image" />
              <h4>{image.title}</h4>
              <button onClick={(e) => toggleHandler(image.id)}>
                {image.favToggle ? "unfavorite" : "favorite"}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}
