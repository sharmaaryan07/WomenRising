import { useState } from "react";
import adminJobContext from "./adminJobContext";


const AdminJobState = (props) => {

    const host = "http://localhost:5000";
    const jobInitial = []
    const [jobs, setJobs] = useState(jobInitial);


    //Route 1: Add a Job
    const addadminjob = async (ownername, title, description, location, salary, phone, email, materialImg, image) => {

        // API Call
        const response = await fetch(`${host}/api/adminjob/addadminjob`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ownername, title, description, location, salary, phone, email, materialImg, image })
        });
        setJobs(jobs.concat(response))
    }


    //Route 2: fetch all Job
    const getadminJobs = async () => {

        // API Call
        const response = await fetch(`${host}/api/adminjob/fetchadminjob`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await response.json();
        // console.log(json)
        setJobs(json);
    }


    //Route 3: Delete Job
    const deleteadminJobs = async (id) => {

        // API Call
        const response = await fetch(`${host}/api/adminjob/deleteadminjob/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const json = response.json();
        console.log(json)

        const newJob = jobs.filter((note) => { return note._id !== id })
        setJobs(newJob);
    }

    return (
        <adminJobContext.Provider value={{ jobs, getadminJobs, addadminjob, deleteadminJobs }}>
            {props.children}
        </adminJobContext.Provider>
    )
}

export default AdminJobState;