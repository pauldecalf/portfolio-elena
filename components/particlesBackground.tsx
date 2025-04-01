"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Init");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 100, density: { enable: false } },
          color: { value: "#ffffff" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true, anim: { speed: 4, size_min: 0.3 } },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },

          //   line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
          line_linked: { enable: false },
        },
        // interactivity: {
        //   events: {
        //     onhover: { enable: true, mode: "bubble" },
        //     onclick: { enable: true, mode: "repulse" },
        //   },
        //   modes: {
        //     bubble: { distance: 250, duration: 2, size: 0, opacity: 0 },
        //     repulse: { distance: 400, duration: 4 },
        //   },
        // },
      }}
    />
  );
}
