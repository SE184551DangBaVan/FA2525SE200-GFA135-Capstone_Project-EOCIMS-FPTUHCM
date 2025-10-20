import React, { useState, useEffect, useRef } from "react";
import "./ScissorLift.css";

/**
 * ScissorLift props:
 *  - links (number) : how many X-pairs (stacked). Default 6.
 *  - speed (number) : transition duration seconds. Default 0.5
 */
export default function ScissorLift({ links = 6, speed = 0.5 }) {
  const [t, setT] = useState(0); // 0 retracted -> 1 extended
  const [auto, setAuto] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    let dir = 1;
    if (!auto) return;
    const step = (time) => {
      setT((prev) => {
        const next = prev + dir * 0.01;
        if (next >= 1) { dir = -1; return 1; }
        if (next <= 0) { dir = 1; return 0; }
        return Math.min(1, Math.max(0, next));
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [auto]);

  // quick helpers
  const extend = () => setT(1);
  const retract = () => setT(0);
  const toggleAuto = () => setAuto((s) => !s);

  // Render 'links' elements
  const items = Array.from({ length: links }).map((_, idx) => {
    // stagger each row visually (optional)
    return (
      <div key={idx} className="scissor-row" style={{ ["--i"]: idx }}>
        <div className="bar left" />
        <div className="bar right" />
        <div className="pivot" />
      </div>
    );
  });

  return (
    <div
      className="scissor-wrap"
      aria-hidden="false"
      style={{
        // expose t and speed to CSS
        ["--t"]: t,
        ["--speed"]: `${speed}s`,
      }}
    >
      <div className="controls">
        <button onClick={extend} aria-pressed={t === 1}>Extend</button>
        <button onClick={retract} aria-pressed={t === 0}>Retract</button>
        <button onClick={toggleAuto} className={auto ? "active" : ""}>
          {auto ? "Stop Auto" : "Auto"}
        </button>
      </div>

      <div className="scissor-stage" role="img" aria-label="Scissor lift">
        <div className="scissor" style={{ ["--links"]: links }}>
          {items}
        </div>
        <div className="platform top">▲</div>
        <div className="platform bottom">▼</div>
      </div>
    </div>
  );
}
