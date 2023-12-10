import React from 'react'
import "./Style.css";

function Genre(props) {
  return (
    <div className="footermovie">
    <h4>{props.title}</h4>
   <div className="genrlist">
   <div >
   <p className="genre">{props.contanet1}</p>
    <p className="genre">{props.contanet2}</p>
    <p className="genre">{props.contanet3}</p>
    <p className="genre">{props.contanet4}</p> 
   </div>
   <div>
   <p className="genre">{props.contanet5}</p>
    <p className="genre">{props.contanet6}</p>
    <p className="genre">{props.contanet7}</p>
    <p className="genre">{props.contanet8}</p>
   </div>
   </div>
  </div>
  )
}

export default Genre