import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      props.setProgress(0)
      const response = await fetch(`http://localhost:5000/api/job/getjob/${id}`);
      props.setProgress(50)
      const data = await response.json();
      props.setProgress(100)
      setJob(data);
    };
    fetchJob();

  }, [id]);

  return (
    <div>
      title: {job.title} <br/>
      description: {job.description}<br/>
      salary: {job.salary}<br/>
      ...
    </div>
  );
};

export default ProductDetail;
