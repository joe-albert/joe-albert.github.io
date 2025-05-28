import * as React from "react";
import {
    Avatar,
    Box, Card, CardContent, Divider, Link, Typography
} from "@mui/material";

import {WorkExperience} from "../../types/WorkExperience.interface";
import JobContent from "./JobContent";
import {Job} from "../../types/Job.interface";

type props = {
    workExperience: WorkExperience;
};

const WorkCard = ({ workExperience }: props) => {

    /**
     * Build bulleted sections of each card
     */
    const jobList = workExperience.jobList.map((job : Job, index) => (
        <Box>
            <JobContent
                job={job}
                displayTime={workExperience.jobList.length !== 1}
            />
            {(index !== workExperience.jobList.length - 1) ?
                <Box sx={{ display: 'block', height: '15px' }} /> : ""}
        </Box>
    ))

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <Card
            sx={{
                width: {sm:"100%", md:"90%", lg:"70%", xl:"60%"},
            }}
            >
                {/* CARD HEADER */}
                <Box
                    sx={{
                        p:2,
                        display:"flex",
                        alignItems:"center",
                    }}
                >
                    <Avatar
                        variant="square"
                        sx={{
                            display: "inline-block",
                            height: "60px",
                            width: "60px",
                        }}
                        src={workExperience.companyLogo}/>
                    <Box sx={{ display: 'block', width: '30px' }} />
                    <Link
                    href={workExperience.companyLink}
                    >
                        <Typography sx={{
                            fontSize: "28px",
                            justifyContent: "center",
                            alignItems: "center",
                        }} variant="h3" display={"inline"}>{workExperience.companyName}</Typography>
                    </Link>


                </Box>
                <Divider variant="middle" />

                {/* CARD CONTENT */}
                <CardContent>
                    {jobList}
                </CardContent>

                {/* CARD FOOTER */}
                <Box
                    sx={{
                        p:2,
                        backgroundColor: "#f9f9ed"
                    }}
                >
                    {workExperience.jobList[workExperience.jobList.length-1].positionStart} - {workExperience.jobList[0].positionEnd} | {workExperience.workLocation}
                </Box>
            </Card>
        </Box>
    );
}

export default WorkCard;
