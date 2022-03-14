import { JobsService } from "../services/jobs.service";

export interface Jobs {
    id: number;
    Title: string;
    Description: string;
    DateOfPublish: Date;
    Salary:string;
    Location: string;
}
