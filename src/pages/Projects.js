import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import MapImg from "../assets/images/map.JPG";

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
  /* .row {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    .image {
      position: relative;
      flex: 1;
      max-width: 39rem;
      height: 30rem;
      overflow: hidden;
      img {
        opacity: 0.8;
        position: relative;
        vertical-align: top;
        transition: 0.6s;
        transition-property: opacity;
        &:hover {
          opacity: 1;
        }
      }
      &:hover .details h2 {
        transform: translateY(-30px);
      }
    }
    .details {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      h2,
      p,
      span {
        color: #fff;
      }
      h2 {
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 300;
        margin-top: 4rem;
        span {
          font-weight: 900;
        }
      }
    }
  } */
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .image {
    background: #50a7ff;
    position: relative;
    flex: 1;
    max-width: 460px;
    height: 300px;
    margin: 20px;
    overflow: hidden;
  }

  .image img {
    opacity: 0.8;
    position: relative;
    vertical-align: top;
    transition: 0.6s;
    transition-property: opacity;
  }

  .image:hover img {
    opacity: 1;
  }

  .image .details {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    width: 100%;
    height: 100%;
  }

  .image .details h2 {
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 300;
    margin-top: 70px;
    transition: 0.4s;
    transition-property: transform;
  }

  .image .details h2 span {
    font-weight: 900;
  }

  .image:hover .details h2 {
    transform: translateY(-30px);
  }

  .image .details p {
    margin: 30px 30px 0 30px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    opacity: 0;
    transition: 0.6s;
    transition-property: opacity, transform;
  }

  .image:hover .details p {
    opacity: 1;
    transform: translateY(-40px);
  }

  .more {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    bottom: -60px;
    transition: 0.6s;
    transition-property: bottom;
  }

  .image:hover .more {
    bottom: 0;
  }

  .more .read-more {
    color: #000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .more .read-more span {
    font-weight: 900;
  }

  .more .icon-links i {
    color: #000;
    font-size: 20px;
  }

  .more .icon-links a:not(:last-child) i {
    margin-right: 20px;
  }

  /* Responsive CSS */

  @media (max-width: 1080px) {
    .image {
      flex: 100%;
      max-width: 480px;
    }
  }

  @media (max-width: 400px) {
    .image .details p {
      font-size: 16px;
    }

    .more .read-more,
    .more .icon-links a i {
      font-size: 18px;
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

        <div className="row">
          <div className="image">
            <img src={MapImg} alt="" />
            <div className="details">
              <h2>
                Project <span>Name</span>
              </h2>
              <p>
                About Project: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque eius ratione ipsa explicabo odio
                impedit.
              </p>
              <div className="more">
                <a href="#" className="read__more">
                  <p>
                    Read <span>More</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={MapImg} alt="" />
            <div className="details">
              <h2>
                Project <span>Name</span>
              </h2>
              <p>
                About Project: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque eius ratione ipsa explicabo odio
                impedit.
              </p>
              <div className="more">
                <a href="#" className="read__more">
                  Read <span>More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={MapImg} alt="" />
            <div className="details">
              <h2>
                Project <span>Name</span>
              </h2>
              <p>
                About Project: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque eius ratione ipsa explicabo odio
                impedit.
              </p>
              <div className="more">
                <a href="#" className="read__more">
                  Read <span>More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
}
