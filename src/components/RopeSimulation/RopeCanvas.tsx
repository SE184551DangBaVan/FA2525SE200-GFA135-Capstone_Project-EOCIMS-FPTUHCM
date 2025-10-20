import React, { useEffect, useRef } from "react";
import "./RopeCanvas.css";

export default function RopeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let bothAnchored = false;
  let anchorX = 0;
  let anchorY = 0;

  useEffect(() => {
    const TimeInterval = 1 / 100000;
    const Gravity = 9.8;
    const ElasticK = 0.1;
    const SlowK = 0.98;
    const UnitLenthWeight = 1 / 10000;
    const UnitLength = 1 / 20;
    const LengthWeight = UnitLenthWeight * UnitLength;
    let Rope: { x: number; y: number; vx: number; vy: number }[] = [];
    let DrawSize: number;
    let FullWidth: number,
      FullHeight: number,
      NormalWidth: number,
      NormalHeight: number,
      MinNormalSize: number;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function WindowResize() {
      FullWidth = window.innerWidth * window.devicePixelRatio;
      FullHeight = window.innerHeight * window.devicePixelRatio;

      canvas.style.transform = `scale(${1 / window.devicePixelRatio})`;
      canvas.style.width = `${FullWidth}px`;
      canvas.style.height = `${FullHeight}px`;
      canvas.width = FullWidth;
      canvas.height = FullHeight;

      NormalWidth = FullWidth / 200;
      NormalHeight = FullHeight / 100;
      MinNormalSize = Math.min(NormalWidth, NormalHeight);

      DrawSize = MinNormalSize * 5;
    }

    function RopeIni() {
      Rope = [];
      for (let i = 0; i < 100; i++) {
        Rope.push({ x: 0, y: UnitLength * i, vx: 0, vy: 0 });
      }
    }
    
    function PhysicalChange() {
      const OldRope = structuredClone(Rope);
      for (let i = 1; i < OldRope.length - 1; i++) {
        // skip the last point if anchored
        if (bothAnchored && i === Rope.length - 1) continue;

        Rope[i].vy += Gravity * TimeInterval;

        if (i + 1 < OldRope.length) {
          const dx = OldRope[i + 1].x - OldRope[i].x;
          const dy = OldRope[i + 1].y - OldRope[i].y;
          const Distance = Math.sqrt(dx * dx + dy * dy);
          if (Distance > UnitLength) {
            const Force = (Distance - UnitLength) * ElasticK;
            Rope[i].vx += (dx / Distance) * Force / LengthWeight * TimeInterval;
            Rope[i].vy += (dy / Distance) * Force / LengthWeight * TimeInterval;
          }
        }

        if (i - 1 >= 0) {
          const dx = OldRope[i - 1].x - OldRope[i].x;
          const dy = OldRope[i - 1].y - OldRope[i].y;
          const Distance = Math.sqrt(dx * dx + dy * dy);
          if (Distance > UnitLength) {
            const Force = (Distance - UnitLength) * ElasticK;
            Rope[i].vx += (dx / Distance) * Force / LengthWeight * TimeInterval;
            Rope[i].vy += (dy / Distance) * Force / LengthWeight * TimeInterval;
          }
        }

        Rope[i].vx *= SlowK;
        Rope[i].vy *= SlowK;
        Rope[i].x += Rope[i].vx;
        Rope[i].y += Rope[i].vy;
      }

      // force rope ends back to anchor if bothAnchored
      if (bothAnchored) {
        Rope[0].x = 0;
        Rope[0].y = 0;
        Rope[Rope.length - 1].x = 5; // or wherever you want it pinned
        Rope[Rope.length - 1].y = 0;
      } else {
        // only first end anchored
        Rope[0].x = 0;
        Rope[0].y = 0;
      }
    }

    function DisplayDraw() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, FullWidth, FullHeight);
      ctx.setTransform(1, 0, 0, 1, FullWidth / 2, FullHeight / 2);
      ctx.lineWidth = DrawSize / 5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(
        (Rope[0].x + anchorX) * DrawSize,
        (Rope[0].y + anchorY) * DrawSize
      );
      for (let i = 1; i < Rope.length; i++) {
        ctx.lineTo(
          (Rope[i].x + anchorX) * DrawSize,
          (Rope[i].y + anchorY) * DrawSize
        );
      }

      ctx.stroke();
    }

    function FrameCycle() {
      for (let i = 0; i < 10; i++) {
        PhysicalChange();
      }
      DisplayDraw();
      requestAnimationFrame(FrameCycle);
    }

    function handleMove(e: MouseEvent | TouchEvent) {
      let x: number, y: number;
      if ("touches" in e) {
        x = e.touches[0].clientX * window.devicePixelRatio;
        y = e.touches[0].clientY * window.devicePixelRatio;
      } else {
        x = e.clientX * window.devicePixelRatio;
        y = e.clientY * window.devicePixelRatio;
      }
      Rope[Rope.length - 1].x = (x - FullWidth / 2) / DrawSize;
      Rope[Rope.length - 1].y = (y - FullHeight / 2) / DrawSize;
    }

    WindowResize();
    RopeIni();
    FrameCycle();

    window.addEventListener("resize", WindowResize);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", handleMove);
    window.addEventListener("keydown", (e) => {
      if (e.code === "KeyE") {
        bothAnchored = !bothAnchored;
      }
    });

    return () => {
      window.removeEventListener("resize", WindowResize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleMove);
      window.addEventListener("keydown", (e) => {
        if (e.code === "KeyE") {
          bothAnchored = !bothAnchored;
        }
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="rope-canvas"></canvas>;
}