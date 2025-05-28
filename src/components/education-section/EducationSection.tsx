import * as React from "react";
import {
    Box
} from "@mui/material";
import {School} from "../../types/School.interface";
import SchoolCard from "./SchoolCard";


const EducationSection = () => {

    const schoolList: School[] = [{
        name: "Endicott College",
        location: "Beverly, MA",
        degree: "Bachelor of Science, Biology and Biotechnology",
        gpa: "3.98/4.0",
        relevantCoursework: [
            "Intro to programming (C++)",
            "Visual Programming (C#)"
        ]
    },{
        name: "Husson University",
        location: "Bangor, ME",
        degree: "Master of Business Administration, Biotechnology and Innovation",
        gpa: "3.92/4.0"
    },{
        name: "University Of Maine",
        location: "Orono, ME",
        gpa: "4.0/4.0",
        relevantCoursework: [
            "Database System Applications (SQL)",
            "Information Systems Software Engineering (Python)",
            "Automation and Integration",
            "Hardware Applications Using C"
        ]
    }]

    const schoolCards = schoolList.map(school => (
        <Box
            sx={{
                padding: "1rem",
            }}
        >
            <SchoolCard school={school} />
        </Box>
    ));

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
            }}
        >
            {schoolCards}
        </Box>
    );
}

export default EducationSection;
