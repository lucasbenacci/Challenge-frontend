import React from 'react';
import ReactDOM from 'react-dom/client';
import Job from './components/cardJobs/ComponentJob.jsx'
import './index.css';
import JobsDb from '../db.json';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main">
      
      {
        JobsDb.jobs.map(function(item) {
          return (
            <div className="JobsCard" key={item.id}>
              <Job 
                logo={item.logo}
                profession={item.profession}
                city={item.city}
                description={item.description}
                salary={item.salary}
                benefits={
                  item.benefits.map(function(data) {
                    return (
                      <div key={data.id}>
                          {data.name}
                      </div>
                    )
                  })
                }
              />
            </div>
          )
        })
      }
    </div>
  </React.StrictMode>,
)
