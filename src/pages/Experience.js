import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const ExpStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
  .error {
    padding: 10rem;
    text-align: center;
  }
`;
export default function Experience() {
  return (
    <ExpStyles>
      <SectionTitle heading="EXPERIENCE" subheading="places I have worked at" />
      <h1 className="error"> Page under development </h1>
    </ExpStyles>
  );
}
