import React, { useState, useEffect } from "react";

interface Props {
  onClick: () => void;
}

const DraggableButton: React.FC<Props> = (props) => {
  const { onClick } = props;
  const [position, setPosition] = useState({ top: 120, right: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Handle touch start event (start dragging)
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];
    const buttonRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setOffset({
      x: touch.clientX - buttonRect.right,
      y: touch.clientY - buttonRect.top,
    });
    setIsDragging(true);
  };

  // Handle touch move event (dragging)
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newRight = window.innerWidth - (touch.clientX - offset.x);
      const newTop = touch.clientY - offset.y;

      const button = document.querySelector("button");
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        setPosition({
          top: Math.min(
            Math.max(newTop, 0),
            viewportHeight - buttonRect.height
          ),
          right: Math.min(
            Math.max(newRight, 0),
            viewportWidth - buttonRect.width
          ),
        });
      }
    }
  };

  // Handle touch end event (stop dragging)
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    } else {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <button
      onClick={onClick}
      onTouchStart={handleTouchStart}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        right: `${position.right}px`,
        cursor: isDragging ? "grabbing" : "grab",
        transition: isDragging ? "none" : "top 0.2s ease, right 0.2s ease",
      }}
      className={`md:hidden block rounded-md text-xs p-2 bg-blue-450 text-white shadow-md ${
        isDragging ? "shadow-xl" : "animate-bounce"
      }`}
    >
      Enquire
    </button>
  );
};

export default DraggableButton;
