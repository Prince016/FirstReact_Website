import React from 'react'
import web from "../src/images/img3.jpg"
import Card_14 from './Card_14'
import Sdata_14 from './Sdata_14'

const Services_14 = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4 ">
                          
                          {
                              Sdata_14.map((val,ind)=>{
                                  return <Card_14 
                                  key={ind}
                                  imgsrc={val.imgsrc}
                                  title={val.title}  />
                              })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services_14

// 55:00