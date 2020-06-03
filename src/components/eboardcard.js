import React from "react"
import Image from 'react-bootstrap/Image'
import Recaptcha from 'react-google-invisible-recaptcha';
import CryptoJS from "crypto-js"

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

/* !!!!!!!!!!! key: 1931 !!!!!!!!!!!!!!!!!! */
/* encrypt emails to avoid bot attacks */


export default class Eboardcard extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            verified: false,
        };

        this.onSubmit = this.onSubmit.bind( this );
        this.onResolved = this.onResolved.bind( this );
    }

    

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
                            sitekey="6LeyOv8UAAAAACrgu3rJugBXtqZDPEPMPv3p1chV"
                            onResolved={ this.onResolved } />
                        )
                    }
                    {   this.props.bro.email !== undefined && this.state.verified === false &&
                        (
                            <div>
                                <i class="fa fa-envelope" style={{fontSize:"36px"}} onClick={this.onSubmit} ></i>
              
                            </div>
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