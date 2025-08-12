// components/HoverCursor.jsx
import React from "react";
import "./css_style/CustomCursor.css";

export default function HoverCursor() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = matchMedia("(pointer: coarse)").matches; // touch devices
    if (reduce || coarse) return;

    const el = ref.current;
    let visible = false;

    const move = (e) => {
      if (!visible) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const show = () => { visible = true; el.classList.add("hc--on"); };
    const hide = () => { visible = false; el.classList.remove("hc--on"); };

    document.addEventListener("mousemove", move);
    // show only on interactive elements
    const selector = "a, button, .btn, [role='button']";
    const enter = (e) => show();
    const leave = (e) => hide();
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(selector)) show();
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(selector)) hide();
    });

    // click “pulse”
    const down = () => el.classList.add("hc--down");
    const up = () => el.classList.remove("hc--down");
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, []);

  return <div ref={ref} className="hover-cursor" aria-hidden="true" />;
}
