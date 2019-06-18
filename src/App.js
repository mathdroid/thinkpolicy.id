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
            particles: {
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              },
              color: {
                value: "#000000"
              },
              size: {
                value: 5
              },
              opacity: {
                value: 1
              },
              shape: {
                type: "circle"
              },
              move: {
                enable: true,
                direction: "top-right",
                speed: 2,
                out_mode: "out"
              },
              line_linked: {
                color: "#000000"
              }
            }
          }}
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0
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
