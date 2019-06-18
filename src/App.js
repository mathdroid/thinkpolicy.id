import React from "react";
import { Root, Routes, Head, useSiteData } from "react-static";

import Particles from "react-particles-js";
//
import { Router } from "components/Router";

import "./app.css";

function App() {
  const { title } = useSiteData();
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
                  mode: "grab"
                }
              },
              detect_on: "window"
            },
            particles: {
              color: {
                value: "#ffffff"
              },

              size: {
                value: 4
              },
              opacity: {
                value: 1
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
                opacity: 1
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
      <img src="/logo.jpg" className="logo" alt="Think Policy logo" />
      <main className="content">
        <Router>
          <Routes path="*" />
        </Router>
      </main>
    </Root>
  );
}

export default App;
