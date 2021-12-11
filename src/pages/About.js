import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import styled from "styled-components";
import AboutItems from "../components/AboutItems";

const AboutStyles = styled.div`
  padding: 16rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .left {
      flex: 3;
      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
          background-color: var(--deep-dark);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
      }
      .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
      }
      .about__info {
        margin-bottom: 5rem;
        padding-right: 5rem;
        p {
          max-width: 100%;
          font-size: 1.5rem;
        }
      }
    }
    .right {
      flex: 2;
      img {
        border: 2px solid var(--gray-1);
      }
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem, 2rem;
    .top-section {
      flex-direction: column;
      gap: 7rem;
      .left {
        flex: 3;
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 3rem;
        }
        .about__info {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Saksham Agarwal</span>
            </p>
            <h2 className="about__heading">A Computer Science Student</h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt excepturi sapiente officia veritatis, illum quas, nemo
                distinctio nulla iure totam omnis dolorum facere. Dignissimos
                suscipit soluta dolore eum cumque hic ipsam placeat, assumenda
                praesentium ea molestiae id fuga dolores consequuntur in
                officiis natus esse. Perferendis consequuntur quis dicta
                possimus.
                <br />
                <br />
                Corporis numquam nam facilis eaque sequi reprehenderit
                voluptatum officiis cum odit voluptatem. Commodi quo corporis
                velit nesciunt deserunt perspiciatis, quos nam sit nisi, sequi
                excepturi laudantium sunt hic voluptatem quae illum quam soluta
                quisquam atque omnis itaque. Odio numquam facere voluptatibus
                dicta delectus eius natus doloremque ullam exercitationem,
                tempore sint ad.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img
              src="https://www.civronpharma.com/images/2018/03/17/sheer-about-center.jpg"
              alt="My Img"
            />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
            heading="My Skills"
            entries={[
              {
                title: "FrontEnd",
                items: ["HTML", "CSS", "SCSS", "React JS"],
              },
              {
                title: "Databases",
                items: ["MySQL", "MongoDB"],
              },
              {
                title: "BackEnd",
                items: ["Django", "Node"],
              },
              {
                title: "App Development",
                items: ["Flutter", "Dart", "Firebase"],
              },
              {
                title: "Languages",
                items: ["Python", "C++", "JavaScript"],
              },
            ]}
          />
          <AboutItems
            heading="Education"
            entries={[
              {
                title: "B.Tech - CSE *",
                items: [
                  "D.Y. Patil International University, Akurdi, Pune",
                  "UGC",
                  "CGPA: 8.9",
                ],
              },
              {
                title: "HSC",
                items: [
                  "S.T. John's Senior Secondary School, Aburoad, Rajasthan",
                  "CBSE",
                  "CGPA: 7.2",
                ],
              },
            ]}
          />
          {/* <AboutItems
            heading="Experience"
            entries={[
              {
                title: "May 2021 - *",
                items: [
                  "Web Scraping Engineer Intern",
                  "Frshr Technologies Pvt. Ltd",
                  "Bangalore",
                ],
              },
              {
                title: "May 2021 - Aug 2021",
                items: [
                  "Software Engineer Intern",
                  "Manastik Pvt. Ltd",
                  "Pune",
                ],
              },
              {
                title: "April 2020 - May 2020",
                items: [
                  "Tech Content Writer",
                  "Esential Services Outsource Pvt. Ltd.",
                ],
              },
              {
                title: "June 2021 - Aug 2021",
                items: [
                  "Reverse Image using CNN - Research Intern",
                  "DY Patil International University",
                  "Pune",
                ],
              },
            ]}
          />
          <AboutItems
            heading="Volunteering Experience"
            entries={[
              {
                title: "Dec 2021 - *",
                items: [
                  "AI-ML Technical Lead",
                  "Google Student Developer Club",
                  "DYPIU",
                ],
              },
              {
                title: "May 2021 - Aug 2021",
                items: [
                  "Software Engineer Intern",
                  "Manastik Pvt. Ltd",
                  "Pune",
                ],
              }
            ]}
          /> */}
        </div>

      </div>
    </AboutStyles>
  );
}
