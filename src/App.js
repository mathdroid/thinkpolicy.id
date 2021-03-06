import React from "react";
import { Root, Routes, Head, useSiteData } from "react-static";

import useWindowSize from "@rehooks/window-size";
import Particles from "react-particles-js";
//
import { Router } from "components/Router";

import "normalize.css";
import "./app.css";

function App() {
  const { innerWidth: width, innerHeight: height } =
    typeof window !== "undefined"
      ? useWindowSize()
      : {
          outerWidth: 1280,
          outerHeight: 768,
          innerHeight: 768,
          innerWidth: 1280
        };
  const { title } = useSiteData();
  const distance = Math.min(width, height) / 8;
  const amount = Math.floor((width * height * 80) / (1280 * 768));
  return (
    <Root>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Particles
          params={{
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              },
              detect_on: "window"
            },
            particles: {
              number: {
                value: amount
              },
              color: {
                value: "#ffffff"
              },

              size: {
                value: 3
              },
              opacity: {
                value: 0.8
              },
              shape: {
                type: "circle",
                stroke: {
                  color: "#000000",
                  width: 8
                }
              },
              move: {
                enable: true,
                direction: "top-right",
                speed: 2,
                out_mode: "out"
              },
              line_linked: {
                color: "#000000",
                width: 2,
                opacity: 0.8,
                distance
              }
            }
          }}
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        />
      </div>
      <main className="content">
        <Router>
          <Routes path="*" />
        </Router>
      </main>
    </Root>
  );
}

export default App;
