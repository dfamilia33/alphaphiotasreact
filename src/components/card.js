import React from "react"


export default function BootstrapCard(props) {

    let src = "https://via.placeholder.com/400x400.png?text=Placeholder";

    if (props.bro.src !== undefined){
        src = props.bro.src;
    }

    return(
        <div className="card bg-dark text-white" style={{width: "18rem", margin: "20px",boxShadow: "0px 1px 20px 5px  #b30000"}}>
          <div className="brotherimgbackdrop card-img-top" style={{backgroundImage:`url("${src}")`}}>
            <div className="brotheroverlay" style={{overflow:"hidden"}}>
              <div style={{color:"white", padding:20}}>
                <div style={{float:"left",width:110}}>Brother Name:</div><div style={{float:"left", width:130}}>{props.bro.bname}</div>
                <div style={{float:"left",width:40}}>Line:</div><div style={{float:"left",width:200}}>{props.bro.line}</div> 
                <div style={{float:"left",width:50}}>Major:</div><div style={{float:"left",width:190}}>
                  <ul style={{listStyleType: "none", padding:0,margin:0}}>
                    {props.bro.major.map((major,index) => ( 
                        <li>{major}</li>
                    ))}
                  </ul>
                </div>
                {props.bro.minor !== undefined &&
                    (
                    <div>
                        <div style={{float:"left",width:50}}>Minor:</div>
                        <div style={{float:"left",width:190}}>
                            <ul style={{listStyleType: "none", padding:0,margin:0}}>
                            {props.bro.minor.map((minor,index) => ( 
                                <li>{minor}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    )

                }
                <div style={{float:"left",width:90}}>Graduation:</div><div style={{float:"left",width:150}}>{props.bro.graduation}</div>
                <div style={{float:"left",width:90}}>Hometown:</div><div style={{float:"left",width:150}}>{props.bro.hometown}</div>
                <div style={{float:"left",width:90}}>Nationality:</div><div style={{float:"left",width:150}}>   
                  <ul style={{listStyleType: "none", padding:0,margin:0}}>
                    {props.bro.nationality.map((nationality,index) => ( 
                        <li>{nationality} <img src={props.bro.flagsrc[index]} alt={`${nationality} Flag`} style ={{width: 20,height:15}}/> </li> 
                    ))}
                  </ul>
                </div> 
                {props.bro.position !== undefined &&
                    (
                        <div>
                            <div style={{float:"left",width:70}}>Position:</div>
                            <div style={{float:"left",width:170}}>{props.bro.position}</div>
                        </div>
                    )

                }
              </div>
            </div>
          </div>
          <div className="card-footer">{props.bro.name}</div>    
        </div>
    )

}