import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import MapImg from "../assets/images/map.JPG";
import ProjectCard from "../components/ProjectCard";

const ProjectStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
  .error {
    padding: 10rem;
    text-align: center;
  }
  .filters {
    justify-content: center;
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    .btn {
      background-color: var(--deep-dark);
      padding: 1rem 2rem;
      transition: 1s ease;
      cursor: pointer;
      p {
        text-transform: uppercase;
        font-size: 1.3rem;
      }
      &:hover {
        background-color: var(--gray-1);
        p {
          color: var(--deep-dark);
          font-weight: bold;
        }
      }
    }
  }
`;

export default function Projects() {
  let filter_names = [
    "JavaScript",
    "CSS",
    "HTML",
    "Django",
    "React",
    "NodeJs",
    "AI ML",
    "Flutter",
    "Dart",
    "Python",
  ];
  return (
    <ProjectStyles>
      <SectionTitle heading="PROJECTS" subheading="some of my works" />
      <div className="container">
        <div className="filters">
          {filter_names.map((name) => (
            <div className="btn">
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className="project__wrapper">
          <ProjectCard />
        </div>
      </div>
    </ProjectStyles>
  );
}
