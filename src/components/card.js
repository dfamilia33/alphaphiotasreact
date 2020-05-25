import React from "react"

export default class BootstrapCard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selected: false,
        hovered: false,
      };
    }



    render(){

      let src = "https://via.placeholder.com/400x400.png?text=Placeholder";

      if (this.props.bro.src !== undefined){
          src = this.props.bro.src;
      }

      return(
          <div key={this.props.bro.bname} className="card bg-dark text-white" style={{width: "18rem", margin: "20px"}}>
            <div className="brotherimgbackdrop card-img-top" style={{backgroundImage:`url("${src}")`}}>
              <div className="brotheroverlay" style={{overflow:"hidden"}}>
                <div style={{color:"white", padding:20}}>
                  <div style={{float:"left",width:110}}>Brother Name:</div><div style={{float:"left", width:130}}>{this.props.bro.bname}</div>
                  <div style={{float:"left",width:40}}>Line:</div><div style={{float:"left",width:200}}>{this.props.bro.line}</div> 
                  <div style={{float:"left",width:50}}>Major:</div><div style={{float:"left",width:190}}>
                    <ul style={{listStyleType: "none", padding:0,margin:0}}>
                      {this.props.bro.major.map((major,index) => ( 
                          <li>{major}</li>
                      ))}
                    </ul>
                  </div>
                  {this.props.bro.minor !== undefined &&
                      (
                      <div>
                          <div style={{float:"left",width:50}}>Minor:</div>
                          <div style={{float:"left",width:190}}>
                              <ul style={{listStyleType: "none", padding:0,margin:0}}>
                              {this.props.bro.minor.map((minor,index) => ( 
                                  <li>{minor}</li>
                              ))}
                              </ul>
                          </div>
                      </div>
                      )

                  }
                  <div style={{float:"left",width:90}}>Graduation:</div><div style={{float:"left",width:150}}>{this.props.bro.graduation}</div>
                  <div style={{float:"left",width:90}}>Hometown:</div><div style={{float:"left",width:150}}>{this.props.bro.hometown}</div>
                  <div style={{float:"left",width:90}}>Nationality:</div><div style={{float:"left",width:150}}>   
                    <ul style={{listStyleType: "none", padding:0,margin:0}}>
                      {this.props.bro.nationality.map((nationality,index) => ( 
                          <li>{nationality} <img src={this.props.bro.flagsrc[index]} alt={`${nationality} Flag`} style ={{width: 20,height:15}}/> </li> 
                      ))}
                    </ul>
                  </div> 
                  {this.props.bro.position !== undefined &&
                      (
                          <div>
                              <div style={{float:"left",width:70}}>Position:</div>
                              <div style={{float:"left",width:170}}>{this.props.bro.position}</div>
                          </div>
                      )

                  }
                </div>
              </div>
            </div>
            <div className="card-footer">{this.props.bro.name}</div>    
          </div>
      )

  }

}