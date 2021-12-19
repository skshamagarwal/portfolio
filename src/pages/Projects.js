import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'

const ProjectStyles = styled.div`
    padding-top: 10rem;
    min-height: 100vh;
    .error {
        padding: 10rem;
        text-align: center;
    }
`;

export default function Projects() {
    return (
        <ProjectStyles>
            <SectionTitle heading="PROJECTS" subheading="some of my works" />
            <h1 className='error'> Page under development </h1>
            </ProjectStyles>
    )
}
