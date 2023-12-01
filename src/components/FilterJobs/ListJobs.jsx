import { React, useState } from 'react'
import data from '/db.json'
import Job from '../cardJobs/ComponentJob.jsx'
import '../cardJobs/componentJob.css'

export default function FilterJobs (props) {

    const filteredData = data.jobs.filter((el) => {
        if(props.input === '') {
            return el;  
        }
        else {
            
            return el.profession.toLowerCase().includes(props.input)
        }
    })
    

    return (
        <div>
            {filteredData.map((item) => {
                <div className="JobsCard" key={item.id}>
                    <Job 
                        logo={item.logo}
                        profession={item.profession}
                        city={item.city}
                        description={item.description}
                        salary={item.salary}
                        benefits={
                            item.benefits.map(function(cursor) {
                            return (
                                <div key={cursor.id}>
                                    {cursor.name}
                                </div>
                            )
                            })
                        }
                    />
                </div>
            })}
        </div>
    )
}