import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`http://localhost:5000/api/job/getjob/${id}`);
      const data = await response.json();
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
