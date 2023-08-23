import React, { useState, useEffect, useRef } from "react";
import Dot from "./components/Dot";

function App() {
  const [dots, setDots] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const buttons = useRef()
  
  useEffect(() => {
    setCurrentIndex(dots.length)
  }, [dots])
  
  const handleOnClick = (event, x, y) => {
    if (buttons.current.contains(event.target)) return;
    setDots(prevDots => {
      let updatedDots;
      if (currentIndex < dots.length) {
        updatedDots = [
          ...prevDots.slice(0, currentIndex),
          {x: x, y: y}
        ]
      } else {
        updatedDots = [
          ...prevDots,
          {x: x, y: y}
        ]
      }
      return updatedDots
    })
  }

  const handleUndo = () => {
    if (currentIndex === 0) return
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const handleRedo = () => {
    if (currentIndex === dots.length) return
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  return (
    <div className="bg-[#121212] w-screen h-screen relative" onMouseDown={(event) => handleOnClick(event, event.pageX, event.pageY)}>
      {dots.slice(0, currentIndex).map((dot, index) => {
        return(
          <Dot key={index} x={dot.x} y={dot.y} number={index} nonselectable></Dot>
        )
      })}
      <div className="flex justify-end">
        <div className="flex gap-8 p-8" ref={buttons}>
          <button className="bg-gray-200 py-2 font-bold px-4 rounded-md hover:bg-gray-300" onClick={handleUndo}>undo</button>
          <button className="bg-gray-200 py-2 font-bold px-4 rounded-md hover:bg-gray-300" onClick={handleRedo}>redo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
