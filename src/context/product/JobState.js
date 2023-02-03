import { useState } from "react";
import jobContext from "./jobContext";


const JobState = (props) => {
    
    const host="http://localhost:5000";
    const jobInitial = []
    const [jobs, setJobs] = useState(jobInitial);

    //Route 1: fetch all Product
    const getJobs = async()=>{

      // API Call
      const response = await fetch(`${host}/api/job/fetchjob`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const json= await response.json();
      // console.log(json)
      setJobs(json);
    }

    
    return (
    <jobContext.Provider value={{ jobs, getJobs}}>
        {props.children}
    </jobContext.Provider>
)
}

export default JobState;