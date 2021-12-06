import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavBarStyles = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--dark-bg);

  .navIcon {
    display: none;
    outline: none;
    position: absolute;
    margin: 3rem;
    top: 0;
    right: 0;
    height: 4rem;
    cursor: pointer;
    transition: 0.5s ease;
    * {
      pointer-events: none;
    }
    &:hover {
      background-color: var(--deep-dark);
    }
  }

  .wrapper {
    padding: 2rem 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .logo {
      p {
        font-size: 1.8rem;
        letter-spacing: 2px;
        font-family: "LilitaOne Regular";
      }
    }
    .menu {
      ul {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;

        li {
          display: inline-block;
          border-radius: 8px;
          transition: 0.5s ease background-color;

          &:hover {
            background-color: var(--deep-dark);
          }

          a {
            display: inline-block;
            font-family: "RobotoMono Regular";
            margin: 0 0.5em;
            padding: 0.3rem 1rem;
            font-size: 1.8rem;
            letter-spacing: 2px;
            color: var(--gray-1);
            outline: none;
          }

          .active {
            color: var(--white);
          }
        }
      }
    }
    .resume {
      font-family: "RobotoMono Regular";
      font-size: 1.8rem;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .navIcon {
      display: block;
    }
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .wrapper {
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      justify-content: space-evenly;
      --top: 1rem;
      transition: 0.3s ease transform;
      top: var(--top);

      .logo {
        p {
          font-size: 3rem;
        }
      }
      .menu {
        ul {
          li {
            display: block;
            margin-bottom: 2rem;
            a {
              font-size: 3rem;
            }
          }
        }
      }
      .resume {
        font-size: 3rem;
      }
    }
  }
`;

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavBarStyles>
      <div className="navIcon"
        onClick={() => setShowNav(!showNav)}
        role="button">
        {
          !showNav
            ? <MdMenu />
            : <MdClose />
        }
      </div>
      <div className={!showNav ? 'wrapper hide-item' : 'wrapper'}>
        <div className="logo">
          <NavLink to="/">
            <p>SAKSHAM</p>
            <p>AGARWAL</p>
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/"
                onClick={() => setShowNav(!showNav)}
                role="button">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                onClick={() => setShowNav(!showNav)}
                role="button">
                ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/projects"
                onClick={() => setShowNav(!showNav)}
                role="button">
                PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/blogs"
                onClick={() => setShowNav(!showNav)}
                role="button">
                BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                onClick={() => setShowNav(!showNav)}
                role="button">
                CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <h1 className="resume">RESUME</h1>
      </div>
    </NavBarStyles>
  );
}
