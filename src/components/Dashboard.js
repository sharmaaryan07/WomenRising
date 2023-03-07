import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import adminJobContext from '../context/product/adminJobContext';
import Navadmin from './Navadmin'
import Adminjobcard from './Adminjobcard'
import Productitems from './Productitems';
import adminProductContext from '../context/product/adminProductContext';


function Dashboard() {

    const Context = useContext(adminJobContext)
    const { jobs, getadminJobs } = Context;

    const Context2 = useContext(adminProductContext)
    const { products, getadminproduct } = Context2;

    useEffect(() => {
        // this function will get all the jobs that are pending.
        getadminJobs();
        // this function will get all the product that are pending.
        getadminproduct();
    })

    return (
        <div>
            <div className="nav">
                <Navadmin />
            </div>

            <div className="container  mt-5  font-bold">
                <div className=" ml-[50rem]  text-3xl">
                    <h1>Admin <span className='text-orange-500' >Dashboard</span></h1>
                </div>

                <hr className='  border-orange-500 mt-7' />
                <div className="content pl-[17rem] text-2xl mt-10 space-y-14 ">
                    <div className="pendingjobs">
                        <h1 className=''>
                            Pending <span className='text-orange-500' >Job's</span>
                        </h1>

                        <div className="jobs">
                            <div className="jobCard  space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:mt-5 lg:grid lg:grid-cols-3 ">
                                {jobs.map((job) => {
                                    return <Adminjobcard key={job._id} job={job} />
                                }) ? jobs.map((job) => {
                                    return <Adminjobcard key={job._id} job={job} />
                                }).slice(0,3) : ""}
                            </div>
                        </div>
                    </div>

                    <div className="pendingproduct">
                        <h1 >
                            Pending <span className='text-orange-500' >Product's</span>
                        </h1>

                        <div className="product">
                            <div className="productContainer space-y-4 grid justify-center items-center  md:grid md:grid-cols-2 md:space-x-3 lg:grid lg:grid-cols-3">
                                {products.map((product) => {
                                    return <Productitems product={product} />
                                }) ? products.map((product) => {
                                    return <Productitems product={product} />
                                }).slice(0,3) : ""}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
