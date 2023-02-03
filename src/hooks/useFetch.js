import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([url.title])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const res =axios.get(url);
                setData(res.Data);
            }catch(err){
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[url]);


    const reFetch = async ()=>{
        setLoading(true);
        try{
            const res =axios.get(url);
            setData(res.Data);
        }catch(err){
            setError(err);
        }
        setLoading(false);
    };

    return {data, error,loading , reFetch};
}

export default useFetch;