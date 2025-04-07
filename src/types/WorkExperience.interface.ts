import {Job} from "./Job.interface";

export interface WorkExperience {
    companyName: string;
    companyLogo: any;
    companyLink: string;
    workLocation: string;
    jobList: Job[];
}