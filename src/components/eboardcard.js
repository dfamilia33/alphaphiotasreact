import React from "react"
import Image from 'react-bootstrap/Image'
import Recaptcha from 'react-google-invisible-recaptcha';
import {decrypt} from "../objects/bros.js"

/* !!!!!!!!!!! key: 1931 !!!!!!!!!!!!!!!!!! */
/* I encrypted brothers emails with the above encryption scheme
    using the CryptoJS. When you add new emails you must manually
    convert the brothers emais with the above function and update bros.js
    Yes you should not put a key in the code but this is not to
    stop humans from getting access, just that realistically
    wont try to brute force encryption schemes*/


export default class Eboardcard extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            verified: false,
        };

        this.onSubmit = this.onSubmit.bind( this );
        this.onResolved = this.onResolved.bind( this );
    }

    
    //Brother emails are protected by Encryption and 
    //Google's Recaptacha tool (I am not a robot)
    
    render(){
        return (
            <div className="eboardcard" >
                <Image className="eboardpic" src={this.props.bro.src} roundedCircle />
                <div className="eboardcardtext">

                    <div style={{marginTop:"20px"}}>{this.props.bro.name}</div>
                    <div >{this.props.bro.position}</div>
                    {   this.props.bro.email !== undefined &&
                        (
                            <Recaptcha
                            ref={ ref => this.recaptcha = ref }
                            sitekey={`${process.env.RECAPTCHA_SITEKEY}`}
                            onResolved={ this.onResolved } />
                        )
                    }
                    {   this.props.bro.email !== undefined && this.state.verified === false &&
                        (
            
                            <i class="fa fa-envelope" style={{fontSize:"36px"}} onClick={this.onSubmit} ></i>
              
                            
                        )

                    }

                    
                    
                    {
                        this.state.verified === true &&
                            <div>{decrypt(this.props.bro.email, "1931")}</div>
                    }
                </div>
            </div>

        )
    }
    onSubmit() {
        this.recaptcha.execute();
    }

    onResolved() {
        let response = this.recaptcha.getResponse();
        if (response.length > 0){
            this.setState({verified: true });
        }
        console.log('Recaptcha resolved with response: ' + response);
    }

}