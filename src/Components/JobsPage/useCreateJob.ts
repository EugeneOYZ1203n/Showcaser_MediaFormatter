import { useState } from "react";

const useCreateJob = () => {
    const [jobList, setJobList] = useState({} as {[key: string]: Array<string>})
    const [subjobList, setSubJobList] = useState({} as {[key: string]: {title: string, progress: number}})

    //  Importing past session jobs list here??

    const CreateJob = (jobTitle:string, subjobs: Array<string>)=>{

        const start_id = Object.keys(subjobList).length;

        const subjobIds = subjobs.map((_subjob, index)=> String(start_id+index))

        let subjobData : {[key: string]: {title: string, progress: number}} = {}

        subjobs.forEach((subjob, index) => {
            const id = String(start_id + index);
            
            subjobData[id] = {
                title: subjob,
                progress: 0
            }
        })

        setSubJobList({...subjobList, ...subjobData})
        setJobList({...jobList, [jobTitle] : subjobIds})

        return subjobIds
    }

    const UpdateSubJob = (id:string, newProgress: number)=>{
        setSubJobList({...subjobList, [id]: {
            title: subjobList[id].title,
            progress: newProgress
    }})}
    const ErrorSubJob = (id:string)=>{
        setSubJobList({...subjobList, [id]: {
            title: subjobList[id].title,
            progress: -1
    }})}

    return [CreateJob, UpdateSubJob, ErrorSubJob, jobList, subjobList] as [
        CreateJob: (jobTitle: string, subjobs: Array<string>) => string[],
        UpdateSubJob: (id: string, newProgress: number) => void,
        ErrorSubJob: (id: string) => void,
        jobList: {
            [key: string]: string[];
        },
        subJobList:{
            [key: string]: {
                title: string;
                progress: number;
            };
        }
    ]
} 

export default useCreateJob;