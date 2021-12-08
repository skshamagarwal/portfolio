import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import Social from "../components/Social";

const HomeStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 500px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      text-shadow: 2px 2px #00000094;
    }
  }

  .hero__info {
    margin-top: 5rem;
    p {
      text-shadow: 1.5px 1.5px #00000094;
      margin-bottom: 5rem;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      a {
        margin: 1rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.5rem;
      .hero__name {
        font-size: 4rem;
      }
    }
    .hero__info {
      .buttons {
        a {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <Social />
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Saksham Agarwal</span>
          </h1>
          <div className="hero__info">
            <PText>
              {
                "I love bringing concepts to life. With every line of code, I strive to make a new step to explore more."
              }
            </PText>
            <div className="buttons">
              <Button
                btnLink="/projects"
                btnText="Download Resume"
                outline={false}
              />
              <Button btnLink="/projects" btnText="Contact" outline={true} />
            </div>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
