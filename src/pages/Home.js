import React from "react";
import bgImage from "./../assets/images/sectionBg.png";
import Bg from "./../assets/images/bg.png";
import { Container, Button, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Learn to be creative</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  Learn exciting technologies from web development, design, game
                  development and more!
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/courses"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                  View Courses
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
