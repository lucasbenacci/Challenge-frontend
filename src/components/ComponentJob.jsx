import './ComponentJob.css';
import ValeTransporte from '../assets/Adidas.png'

export default function Job(props) {
    return(
        <>
            <div className="card">
                <div className="header">
                    <img src={props.logo} alt="Logo da Empresa" />
                    <p><a href="#">{props.salary}<i class='bx bx-chevron-right'></i></a></p>
                </div>
                <div className="body">
                    <h2>{props.profession}</h2>
                    <h3>{props.city}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="footer">
                    <div className="benefits">{props.benefits}</div>
                </div>
            </div>
        </>
    )
}