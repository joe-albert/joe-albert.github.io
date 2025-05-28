import * as React from "react";
import {
    Box
} from "@mui/material";
import {SkillCategory} from "../../types/SkillCategory.interface";
import SkillCategoryCard from "./SkillCategoryCard";
import javaLogo from "../../assets/images/java-logo-1-300x300.png"
import groovyLogo from "../../assets/images/groovy-logo-1-300x300.png"
import pythonLogo from "../../assets/images/python-logo-1-300x300.jpg"
import htmlLogo from "../../assets/images/html5-300x300.jpg"
import cssLogo from "../../assets/images/css3-300x300.jpg"
import mysqlLogo from "../../assets/images/mysql-logo-1-300x300.jpg"
import shellLogo from "../../assets/images/shell-logo-1-300x300.jpg"
import grailsLogo from "../../assets/images/grails-logo-1-300x300.png"
import materialLogo from "../../assets/images/material_ui_logo.png"
import flaskLogo from "../../assets/images/flask-logo.png"
import bootstrapLogo from "../../assets/images/bootstrap_logo.png"
import javascriptLogo from "../../assets/images/javascript_logo.png"
import spockLogo from "../../assets/images/spock_logo.png"
import awsLogo from "../../assets/images/aws_logo.png"
import gcpLogo from "../../assets/images/gcp_logo.png"
import jenkinsLogo from "../../assets/images/jenkins_logo.png"
import bitbucketLogo from "../../assets/images/bitbucket_logo.png"
import confluenceLogo from "../../assets/images/confluence_logo.png"
import jiraLogo from "../../assets/images/jira_logo.png"
import jQueryLogo from "../../assets/images/jquery_logo.png"
import gitLogo from "../../assets/images/git_logo.png"
import seleniumLogo from "../../assets/images/selenium_logo.png"
import dockerLogo from "../../assets/images/docker_logo.png"
import locustLogo from "../../assets/images/locust_logo.png"
import sqlAlchemyLogo from "../../assets/images/sql_alchemy_logo.png"
import swaggerLogo from "../../assets/images/swagger_logo.png"
import postmanLogo from "../../assets/images/postman_logo.png"
import springBootLogo from "../../assets/images/spring_boot_logo.png"
import gradleLogo from "../../assets/images/gradle_logo.png"


const SkillSection = () => {

    const skillCategories: SkillCategory[] = [{
        name: "Languages and Databases",
        skills: [{
            name: "Java",
            logo: javaLogo,
        }, {
            name: "Groovy",
            logo: groovyLogo,
        }, {
            name: "Python",
            logo: pythonLogo,
        },{
            name: "HTML5",
            logo: htmlLogo
        },{
            name: "CSS3",
            logo: cssLogo
        },{
            name: "JavaScript",
            logo: javascriptLogo
        },{
            name: "Mysql",
            logo: mysqlLogo
        },{
            name: "Shell Scripting",
            logo: shellLogo
        }]
    }, {
        name: "Frameworks",
        skills: [{
            name: "Spring Boot",
            logo: springBootLogo,
        }, {
            name: "Grails",
            logo: grailsLogo,
        }, {
            name: "Spock",
            logo: spockLogo
        }, {
            name: "Flask",
            logo: flaskLogo
        }, {
            name: "Bootstrap",
            logo: bootstrapLogo
        }, {
            name: "Selenium",
            logo: seleniumLogo
        },{
            name: "Locust",
            logo: locustLogo
        }]
    }, {
        name: "Libraries",
        skills: [{
            name: "jQuery",
            logo: jQueryLogo
        }, {
            name: "SQLAlchemy",
            logo: sqlAlchemyLogo
        }, {
            name: "Material UI",
            logo: materialLogo
        }]
    }, {
        name: "Other",
        skills: [{
            name: "Gradle",
            logo: gradleLogo,
        }, {
            name: "Bitbucket",
            logo: bitbucketLogo,
        }, {
            name: "Confluence",
            logo: confluenceLogo
        }, {
            name: "Jira",
            logo: jiraLogo
        },{
            name: "Git",
            logo: gitLogo
        },{
            name: "Swagger",
            logo: swaggerLogo
        },{
            name: "Postman",
            logo: postmanLogo
        },{
            name: "AWS",
            logo: awsLogo
        }, {
            name: "GCP",
            logo: gcpLogo
        }, {
            name: "Jenkins",
            logo: jenkinsLogo
        }, {
            name: "Docker",
            logo: dockerLogo
        }]
    }]

    const skillCategoryCards = skillCategories.map(skillCategory => (
        <Box>
            <SkillCategoryCard skillCategory={skillCategory} />
            <Box sx={{ display: 'block', height: '20px' }} />
        </Box>
    ));

    return (
        <Box>
            {skillCategoryCards}
        </Box>
    );
}

export default SkillSection;
