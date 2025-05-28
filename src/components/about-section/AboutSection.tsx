import * as React from "react";
import {
    Box, Typography
} from "@mui/material";
import ProficiencyList from "./ProficiencyList";
import {Proficiency} from "../../types/Proficiency.interface";


const AboutSection = () => {

    const proficiencyList: Proficiency[] = [{
        title: "Programming Languages",
        skills: ["Groovy", "Java", "Python", "JavaScript", "Typescript", "HTML/CSS", "SQL", "Bash", "VBA"]
    },{
        title: "Databases",
        skills: ["MySQL"]
    },{
        title: "Frameworks",
        skills: ["Grails", "Spring Boot", "Spock", "Activiti BPMN", "Flask", "Locust", "Bootstrap"]
    },{
        title: "Libraries",
        skills: ["SQLAlchemy", "Swagger"]
    },{
        title: "Tools & Technologies",
        skills: ["Gradle", "Git", "Docker", "AWS", "GCP", "Jenkins", "Liquibase", "Selenium", "JIRA", "Confluence", "YourKit Java Profiler", "LDAP"]
    },{
        title: "Robotic Platforms",
        skills: ["Hamilton (Vantage & Nimbus)", "Intelliqube", "Ambistore", "Twister"]
    },{
        title: "Languages",
        skills: ["English (Native)", "Japanese (JLPT: N4)"]
    }]

    const proficiencies = proficiencyList.map((proficiency: Proficiency) => (
        <ProficiencyList
            proficiency={proficiency}
        />
    ))

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

            {proficiencies}

            <Box sx={{ display: 'block', height: '10px' }} />
            <Typography>
                Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.
            </Typography>
        </Box>
    );
}

export default AboutSection;
