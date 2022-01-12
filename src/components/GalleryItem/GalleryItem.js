import React from "react";
import "./GalleryItem.css";
import { points } from "../../data/data";

function GalleryItem({ src, index, columnOffset }) {
  //retrieve points from data points to place content on the Grid
  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;

  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return 0;
    return 1;
  };

  return (
    <div
      className="gallery-item"
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
      data-scroll
      data-scroll-speed={getScrollIndex()}
    >
      <div className="gallery-item-image">
        <div
          className="gallery-item-imginner"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default GalleryItem;
