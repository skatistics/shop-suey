import React, { useState, useEffect, useRef } from "react";

function ImageMagnifier({ parentId, image, hiddenImg, setHiddenImg }) {
  const imgRef = useRef(null);
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = useState({ x: 0, y: 0 });
  const [parentSize, setparentSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const parent = document.getElementById(parentId);

    setparentSize({ x: parent.clientWidth, y: parent.clientHeight });
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", hideCursor);
    parent.addEventListener("mouseenter", showCursor);

    return () => {
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", hideCursor);
      parent.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  function onMouseMove(event) {
    const parent = document.getElementById(parentId);
    const mouseX = event.clientX - imgRef.current.clientWidth / 2;
    const mouseY = event.clientY - imgRef.current.clientHeight / 2;

    var rect = parent.getBoundingClientRect();
    var rectX = event.clientX - rect.left;
    var rectY = event.clientY - rect.top;

    const zoomX = (rectX * 100) / parent.clientWidth;
    const zoomY = (rectY * 100) / parent.clientHeight;
    setZoom({
      x: zoomX,
      y: zoomY,
    });

    setmousePosition({
      x: mouseX,
      y: mouseY,
    });
  }

  function showCursor() {
    setHiddenImg(false);
  }

  function hideCursor() {
    setHiddenImg(true);
  }

  return (
    <div
      className={
        "z-[1000] pointer-events-none overflow-hidden fixed" +
        (hiddenImg ? " hidden" : "")
      }
      ref={imgRef}
      style={{
        width: `${parentSize.x * 0.5}px`,
        height: `${parentSize.y * 0.5}px`,
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        backgroundSize: "400%",
        backgroundPosition: `${zoom.x}% ${zoom.y}%`,
      }}
    ></div>
  );
}

export default ImageMagnifier;
