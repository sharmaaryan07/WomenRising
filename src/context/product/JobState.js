import { useState } from "react";
import jobContext from "./jobContext";


const JobState = (props) => {

    const host = "http://localhost:5000";
    const jobInitial = []
    const [jobs, setJobs] = useState(jobInitial);

    //Route 1: fetch all Product
    const getJobs = async () => {

        // API Call
        const response = await fetch(`${host}/api/job/fetchjob`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json();
        // console.log(json)
        setJobs(json);
    }



    // Route 3: Geting perticular product
    const singleJob = async (id, name, title, description, price, phone, email, image) => {
        const response = await fetch(`${host}/api/sell/getproduct/${id}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id, name, title, description, price, phone, email, image })



            // console.log(id, name, title, description, price, phone, email, image)
        });
        const json = await response.json();
        return json
    };


    return (
        <jobContext.Provider value={{ jobs, getJobs }}>
            {props.children}
        </jobContext.Provider>
    )
}

export default JobState;