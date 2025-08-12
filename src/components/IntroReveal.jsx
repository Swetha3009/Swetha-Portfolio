// components/IntroReveal.jsx
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import "./css_style/IntroReveal.css";

export default function IntroReveal({
  command = "pnpm dev",
  runOncePerSession = true,
  startImmediately = true,
  typeSpeedMs = 100,
  pauseAfterType = 900,
  preHoldMs = 1200,
  wipeMs = 2200,
  postHoldMs = 900,
  fadeMs = 900,
}) {
  const [phase, setPhase] = useState("idle");

  const skip = useMemo(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) return true;
    if (runOncePerSession && sessionStorage.getItem("introSeen")) return true;
    return false;
  }, [runOncePerSession]);

  useLayoutEffect(() => {
    const boot = document.getElementById("boot-intro");

    if (skip) {
      // Hide/remove the instant boot overlay even if we skip the animation
      if (boot) {
        boot.classList.add("boot-hide");
        setTimeout(() => boot.remove(), 320);
      }
      document.documentElement.classList.remove("intro-active");
      setPhase("done");
      return;
    }

    // Hide/remove the boot overlay normally
    if (boot) {
      boot.classList.add("boot-hide");
      setTimeout(() => boot.remove(), 320);
    }

    // Lock scroll while intro is active
    document.documentElement.classList.add("intro-active");

    if (startImmediately) {
      requestAnimationFrame(() => setPhase("typing"));
    } else {
      setPhase("typing");
    }

    return () => {
      // Safety: always unlock scroll on unmount
      document.documentElement.classList.remove("intro-active");
    };
  }, [skip, startImmediately]);

  // Unlock scroll the moment the wipe starts (don’t wait for fade to finish)
  useEffect(() => {
    if (phase === "wipe") {
      document.documentElement.classList.remove("intro-active");
    }
  }, [phase]);

  // Advance phases: typing -> wipe -> done
  useEffect(() => {
    if (phase !== "typing") return;

    const typeMs = Math.max(400, command.length * typeSpeedMs);
    const startWipeAt = typeMs + pauseAfterType + preHoldMs;

    const t1 = setTimeout(() => setPhase("wipe"), startWipeAt);
    const t2 = setTimeout(() => {
      setPhase("done");
      // Remember we showed it (only matters if runOncePerSession is true)
      sessionStorage.setItem("introSeen", "1");
      // Extra safety: ensure scroll is unlocked
      document.documentElement.classList.remove("intro-active");
    }, startWipeAt + wipeMs + postHoldMs + fadeMs + 80);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [
    phase,
    command.length,
    typeSpeedMs,
    pauseAfterType,
    preHoldMs,
    wipeMs,
    postHoldMs,
    fadeMs,
  ]);

  if (phase === "done") return null;

  const typing = phase === "typing";
  const wiping = phase === "wipe";
  const typeMs = Math.max(400, command.length * typeSpeedMs);

  return (
    <div
      className={`intro ${typing ? "is-typing" : ""} ${wiping ? "is-wiping" : ""}`}
      aria-hidden="true"
      style={{
        "--typeMs": `${typeMs}ms`,
        "--wipeMs": `${wipeMs}ms`,
        "--postHoldMs": `${postHoldMs}ms`,
        "--fadeMs": `${fadeMs}ms`,
      }}
    >
      <div className="intro__ambient">
        <div className="intro__grain" />
        <div className="intro__vignette" />
      </div>

      <div className="intro__term">
        <div className="intro__line">
          <span className="intro__prompt">$</span>
          <span
            className="intro__type"
            style={{ ["--chars"]: command.length }}
            data-text={command}
            aria-hidden
          >
            {command}
          </span>
          <span className="intro__caret" />
        </div>
        <div className="intro__sub">Launching…</div>
      </div>

      <div className="intro__wipe" />
    </div>
  );
}
