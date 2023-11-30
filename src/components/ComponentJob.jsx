import './ComponentJob.css';
import AlimentacaoLogo from '../assets/Alimentacao.png'
import TransporteLogo from '../assets/Transporte.png'
import DentalLogo from '../assets/Dental.png'
import MedicoLogo from '../assets/Medico.png'


export default function Job(props) {
    return(
        <>
            <div className="card">
                <div className="header">
                    <img src={props.logo} alt="Logo da Empresa" />
                    <p><a href="#">{props.salary}</a></p>
                </div>
                <div className="body">
                    <h2>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="footer">
                    {/* <Divider textAlign="left">Benefícios</Divider> */}
                    <img src={AlimentacaoLogo} alt="Alimentação"/>
                    <img src={TransporteLogo} alt="Transporte" />
                    <img src={DentalLogo} alt="Plano Dental" />
                    <img src={MedicoLogo} alt="Plano Médico" />
                </div>
            </div>
        </>
    )
}