// import { Card } from "react-bootstrap";

export default function battleDetailCard({ characterName, attackName, className }){
    return (
        <div className={`card ${className}`} style={{ "width": "18rem" }}>
            {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
            <div className="card-body">
                <p className="card-text">{characterName} uses {attackName} </p>
            </div>
        </div>        
    )
}