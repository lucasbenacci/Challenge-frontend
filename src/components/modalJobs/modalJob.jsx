import Style from './modalJob.module.css'

export default function Modal ({isOpen, title}) {
    if(isOpen){
        return (
            <div className={Style.background}>
                <div>
                    <h2>{title}</h2>
                    <p>Descrição</p>
                </div>
            </div>
        )
    }
    
}