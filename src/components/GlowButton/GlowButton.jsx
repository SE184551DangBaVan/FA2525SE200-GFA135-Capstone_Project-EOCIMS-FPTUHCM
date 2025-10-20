import React, { useRef } from "react";
import "./GlowButton.css";

export default function GlowButton({ children }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    buttonRef.current.style.setProperty("--x", `${x}px`);
    buttonRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      ref={buttonRef}
      className="glow-btn"
      onMouseMove={handleMouseMove}
    >
      {children}
    </button>
  );
}