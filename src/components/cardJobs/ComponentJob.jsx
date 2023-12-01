import './ComponentJob.css';
import Modal from '../modalJobs/modalJob.jsx';
import { useState } from 'react';

export default function Job(props) {

    const [open, setOpen] = useState(false);

    return(
        <>
            <div className="card" onClick={() => setOpen(!open)}>
                <div className="header">
                    <img src={props.logo} alt="Logo da Empresa" />
                    <p><a href="#" >{props.salary}<i class='bx bx-chevron-right'></i></a></p>
                </div>
                <div className="body">
                    <h2>{props.profession}</h2>
                    <h3>{props.city}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="footer">
                    <div className="benefits">{props.benefits}</div>
                </div>
                <Modal isOpen={open} title={props.city}/>
            </div>
        </>
    )
}