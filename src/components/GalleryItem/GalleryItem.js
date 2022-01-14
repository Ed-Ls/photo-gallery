import React, { useRef } from "react";
import "./GalleryItem.css";
import { points } from "../../data/data";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

function GalleryItem({ src, index, columnOffset }) {
  //retrieve points from data points to place content on the Grid
  const values = points[index];
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

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
      ref={ref}
      data-scroll
      data-scroll-speed={getScrollIndex()}
    >
      <div className={cn("gallery-item-image", { reveal: onScreen })}>
        <div
          className="gallery-item-imginner"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default GalleryItem;
