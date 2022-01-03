import React from "react";
import styled from "styled-components";

import MapImg from "../assets/images/map.JPG";

const ProjectCardStyles = styled.div`
  position: relative;
  height: 30rem;
  width: 30rem;
  border: 2px solid var(--gray-1);
  border-radius: 1rem;
  overflow: hidden;

  .card {
    height: 100%;
    width: 100%;
    transition: 1s;
    &:hover {
      .detail {
        visibility: visible;
        opacity: 1;
      }
    }

    .detail {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
      background-color: rgb(30, 30, 30, 0.95);
      height: 100%;
      width: 100%;
      position: absolute;
      padding: 3rem;
      top: 0;
      text-align: center;
      transition: 1s;
      .title {
        margin-bottom: 1.5rem;
        p {
          font-size: 2.5rem;
          color: white;
          span {
            color: white;
            font-weight: bold;
            letter-spacing: 1.5px;
          }
        }
      }
      .desc {
        p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
        }
      }
      .buttons {
        display: flex;
        justify-content: space-evenly;
        button {
          cursor: pointer;
          border: 2px solid var(--deep-dark);
          border-radius: 1rem;
          padding: 5px 10px;
          color: var(--deep-dark);
          background-color: white;
          transition: 0.5s;
          &:hover {
            border: 2px solid var(--gray-1);
            background-color: var(--deep-dark);
            color: var(--gray-1);
          }
        }
      }
    }
  }
`;
export default function ProjectCard() {
  return (
    <ProjectCardStyles>
      <div className="card">
        <img src={MapImg} alt="" />
        <div className="detail">
          <div className="title">
            <p>
              PREDIX <span>DB</span>
            </p>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              vero aspernatur voluptas quibusdam molestiae maxime obcaecati
              recusandae aperiam. Officiis, quos officia? Mollitia incidunt
              beatae, distinctio facilis animi iusto et reiciendis.
            </p>
          </div>
          <div className="buttons">
            <button>Github</button>
            <button>View Live</button>
          </div>
        </div>
      </div>
    </ProjectCardStyles>
  );
}
