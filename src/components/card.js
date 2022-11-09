// import { Card } from "react-bootstrap";

export default function Card({body,className}){
    return (
        <div className={`card ${className}`} style={{ "width": "18rem" }}>
            {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
        </div>        
    )
}