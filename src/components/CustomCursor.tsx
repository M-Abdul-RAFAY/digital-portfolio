import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${position.x - 16}px, ${
            position.y - 16
          }px) scale(${isPointer ? 1.5 : 1})`,
          border: "2px solid white",
          borderRadius: "50%",
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x - 4}px, ${
            position.y - 4
          }px) scale(${isPointer ? 0 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
