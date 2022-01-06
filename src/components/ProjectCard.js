import React from "react";
import styled from "styled-components";

const ProjectCardStyles = styled.div`
  position: relative;
  width: 19vw;
  height: 15vw;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
      background-color: rgb(30, 30, 30, 0.95);
      height: 100%;
      width: 100%;
      position: absolute;
      padding: 0 2rem;
      top: 0;

      text-align: center;
      transition: 1s;
      overflow-y: auto;
      ::-webkit-scrollbar {
        width: 0;
      }

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
        justify-content: center;
        gap: 1rem;
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
export default function ProjectCard({ projects }) {
  return (
    <ProjectCardStyles>
      <div className="card">
        <img src={projects.img} alt="" />
        <div className="detail">
          <div className="title">
            <p>
              {projects.firstName}
              <span>{projects.lastName}</span>
            </p>
          </div>
          <div className="desc">
            <p>{projects.desc}</p>
          </div>
          <div className="buttons">
            <a href={projects.githubLink}>
              <button>Github</button>
            </a>
            <a href={projects.liveLink}>
              <button>View Live</button>
            </a>
          </div>
        </div>
      </div>
    </ProjectCardStyles>
  );
}
