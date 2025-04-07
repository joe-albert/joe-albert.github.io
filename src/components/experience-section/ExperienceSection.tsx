import * as React from "react";
import {
    Box
} from "@mui/material";

import jaxLogo from "../../assets/images/jackson_laboratory_logo.png"
import genomenonLogo from "../../assets/images/genomenon_logo.png"
import endicottLogo from "../../assets/images/endicott_logo.png"
import accLogo from "../../assets/images/associates_of_cape_cod_logo.png"
import {WorkExperience} from "../../types/WorkExperience.interface";
import WorkCard from "./WorkCard";


const ExperienceSection = () => {

    const workExperienceList: WorkExperience[] = [{
        companyName: "Genomenon",
        companyLogo: genomenonLogo,
        workLocation: "Remote",
        companyLink: "https://www.genomenon.com/",
        jobList: [{
            positionTitle: "Senior Software Engineer",
            positionStart: "May 2024",
            positionEnd: "Present",
            descriptionList: [
                "Worked as part of a team to migrate a suite of web applications from GCloud to AWS as part of an acquisition.",
                "Spearheaded effort to implement front & back-end server-side pagination for most pages in web application for significant improvements in site responsiveness.",
                "Acted as a lead author for a subset of technical documents used in bid for product FDA Approval.",
                "Coordinated cross-team effort to setup and integrate on-site payments into application."
            ]
        }],
    }, {
        companyName: "The Jackson Laboratory",
        companyLogo: jaxLogo,
        workLocation: "Bar Harbor, ME",
        companyLink: "https://www.jax.org/",
        jobList: [{
            positionTitle: "Scientific Software Engineer",
            positionStart: "July 2021",
            positionEnd: "May 2024",
            descriptionList: [
                "Acted as part of a team in an Agile development environment to maintain and improve CKB applications and components using Groovy, Angular, & Javascript.",
                "Took a lead role in the development, design, and prototyping of new relational schema needed to expand data model.",
                "Collaborated directly with stakeholders and clients to investigate new project requirements.",
                "Led effort to add and enhance a series of tools to streamline subscription user management and monitoring tools including D3 interactive visuals.",
                "Automated deployment and configuration of deployments on new VMs using Bash scripts.",
                "Maintained and contributed to a large suite of unit and end-to-end functional tests, run regularly in a Jenkins CI environment to ensure application reliability."
            ]
        }, {
            positionTitle: "Automation Specialist",
            positionStart: "September 2015",
            positionEnd: "July 2021",
            descriptionList: [
                "Specialized in robotic process automation, developing and maintaining a portfolio of both physical robotic systems, as well as applications written in Python, VBA, and SQL to automate workflows.",
                "Acted as a technical lead within a cross functional team to identify, design, and implement, high-throughput automated systems to increase operational efficiency and decrease deviations.",
                "Received JAX Champion award for innovation in 2019 for developing systems that increased departmental throughput by 60%.",
                "Served as a primary point of reference to an external group while working as part of a team to create a complete departmental process map.",
                "Designed and implemented quality control checks to ensure customers were provided accurate data in a timely manner.",
                "Provided technical expertise in advanced analysis of genotyping data, including QPCR and SNP genetic background analysis."
            ]
        }, {
            positionTitle: "Advanced Genotyping Technician",
            positionStart: "March 2014",
            positionEnd: "September 2015",
            descriptionList: [
                "Developed proficiencies in melt curve, high resolution melt, and probe based genotyping analysis alongside standard gel electrophoresis, and quantitative PCR."
            ]
        }
        ],
    }, {
        companyName: "Endicott College",
        companyLogo: endicottLogo,
        workLocation: "Beverly, MA",
        companyLink: "https://www.endicott.edu/",
        jobList: [{
            positionTitle: "Professional Math Tutor",
            positionStart: "February 2013",
            positionEnd: "May 2014",
            descriptionList: [
                "Math tutor for individuals as well as groups, focusing primarily on statistics."
            ]
        }, {
            positionTitle: "Information Technology",
            positionStart: "September 2009",
            positionEnd: "December 2012",
            descriptionList: [
                "Efficiently analyzed and restored systems infected with malware, spyware, and viruses.",
                "Provided an excellent level of technical conflict resolution over phone and in person."
            ]
        }]
    }, {
        companyName: "Associates of Cape Cod",
        companyLogo: accLogo,
        companyLink: "https://www.acciusa.com/",
        workLocation: "East Falmouth, MA",
        jobList: [{
            positionTitle: "Production Technician",
            positionStart: "May 2012",
            positionEnd: "August 2012 (Seasonal)",
            descriptionList: [
                "Collected and processed blood from horseshoe crabs for use in bacterial endotoxin detection kits in this FDA regulated ISO13485 certified facility.",
                "Frequently handled industrial grade centrifuges, needles, glassware, metal-ware, vortexes, and peristaltic pumps, as well as live animals, and the equipment used to sanitize the labs.",
                "Practiced aseptic technique while working in ISO certified cleanrooms and laminar flow hoods."
            ]
        }]
    }
    ]

    const experienceCards = workExperienceList.map(experience => (
        <Box>
            <WorkCard workExperience={experience} />
            <Box sx={{ display: 'block', height: '20px' }} />
        </Box>
    ));

    return (
        <Box>
            {experienceCards}
        </Box>
    );
}

export default ExperienceSection;
