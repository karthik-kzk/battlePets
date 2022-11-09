// import { Card } from "react-bootstrap";

export default function Card({ attack1, attack2, className, attackPoints }){
    return (
        <div className={`card ${className}`} style={{ "width": "21rem", "text-align": "left" }}>
            <div className="card-header">
                Fight
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" type="button" class="btn btn-light" style={{  "text-align": "left" }}
                    onClick={() => attackPoints(5, attack1)}>{attack1}</li>
                <li className="list-group-item" type="button" class="btn btn-light" style={{  "text-align": "left" }}
                    onClick={() => attackPoints(5, attack2)}>{attack2}</li>

                {/* <li className="list-group-item">Vestibulum at eros</li> */}
            </ul>
        </div>    
        
       
      
    )
}