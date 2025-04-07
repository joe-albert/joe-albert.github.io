import React from "react";
import {
    Box, Typography,
} from "@mui/material";
import ProficiencyList from "./ProficiencyList";

const AboutSection = () => {
    return (
        <Box
        sx={{
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '25px',
            padding: "2rem",

        }}
        >
            <Typography>
                I am a Software Engineer with an extensive background in the genomics field. This work has spanned many domains including laboratory robotics, process automation, data analytics, and web development.
            </Typography>

            <Box sx={{ display: 'block', height: '15px' }} />

            <ProficiencyList
                title="Programming Languages"
                skillList="Groovy, Java, Python, JavaScript, Typescript, HTML/CSS, SQL, Bash, VBA"
            />
            <ProficiencyList
                title="Databases"
                skillList="MySQL"
            />
            <ProficiencyList
                title="Frameworks"
                skillList="Grails, Spring Boot, Spock, Activiti BPMN, Flask, Locust, Bootstrap"
            />
            <ProficiencyList
                title="Libraries"
                skillList="SQLAlchemy, Swagger"
            />
            <ProficiencyList
                title="Tools & Technologies"
                skillList="Gradle, Git, Docker, AWS, GCP, Jenkins, Liquibase, Swagger, Selenium, JIRA, Confluence, YourKit Java Profiler, LDAP"
            />
            <ProficiencyList
                title="Robotic Platforms"
                skillList="Hamilton (Vantage & Nimbus), Intelliqube, Ambistore, Twister"
            />
            <ProficiencyList
                title="Languages"
                skillList="English (Native), Japanese (JLPT: N4)"
            />

            <Box sx={{ display: 'block', height: '10px' }} />
            <Typography>
                Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.
            </Typography>
        </Box>
    );
}

export default AboutSection;
