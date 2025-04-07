import * as React from "react";
import {
    Box, List, ListItem, Typography
} from "@mui/material";
import {Job} from "../../types/Job.interface";

type props = {
    job: Job;
    displayTime: boolean;
};

const JobContent = ({ job, displayTime }: props) => {
    const jobDescription = job.descriptionList.map(description => (
        <ListItem
            sx={{
                display: "list-item",
                paddingTop: "4px",
                paddingBottom: "4px",
            }}>
            <Typography>
                {description}
            </Typography>
        </ListItem>
    ))

    return (
        <Box>
            <Typography
                sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
                variant="h4">
                {job.positionTitle}{(displayTime)? ` | ${job.positionStart} - ${job.positionEnd}` : ""}
            </Typography>
            <List
                sx={{
                    paddingLeft:3,
                    listStyle: "disc",
                }}
            >
                {jobDescription}
            </List>
        </Box>
    );
}

export default JobContent;