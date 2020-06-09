import React from "react"
import Franquizpf from "../../static/src/img/cristianfranquizsq.jpeg"
import Familiapf from "../../static/src/img/dfprofile.jpg"
import Seanpf from "../../static/src/img/seanphulnauthpf.jpg"
import Pirovanopf from "../../static/src/img/pirovanopf.jpeg"
import Molfinopf from "../../static/src/img/giuseppeepf.jpeg"
import Jonathonpf from "../../static/src/img/jonathon.jpeg"
import Cesarpf from "../../static/src/img/cesar.jpeg"
import Leopf from "../../static/src/img/leo.jpeg"
import Michaelpf from "../../static/src/img/michael.jpeg"
import Powerspf from "../../static/src/img/powerspf.jpeg"
import Marvinpf from "../../static/src/img/marvinpf.jpeg"
import Tonypf from "../../static/src/img/tony.jpeg"
import Benpf from "../../static/src/img/ben.jpeg"
import Gavinpf from "../../static/src/img/gavinpf.jpeg"
import Khaledpf from "../../static/src/img/khaledpf.jpeg"
import Andrespf from "../../static/src/img/andres.jpg"
import Josepf from "../../static/src/img/josepf.jpeg"
import Diegopf from "../../static/src/img/diegopf.jpeg"
import Currentcrest from "../../static/src/img/current_crest.png"
import DRflag from "../../static/src/img/4x3/do.svg"
import PRflag from "../../static/src/img/4x3/pr.png"
import COflag from "../../static/src/img/4x3/co.svg"
import MXflag from "../../static/src/img/4x3/mx.svg"
import ARflag from "../../static/src/img/4x3/ar.svg"
import PEflag from "../../static/src/img/4x3/pe.svg"
import HNflag from "../../static/src/img/4x3/hn.svg"
import ITflag from "../../static/src/img/4x3/it.svg"
import GYflag from "../../static/src/img/4x3/gy.svg"
import ECflag from "../../static/src/img/4x3/ec.svg"
import EGflag from "../../static/src/img/4x3/eg.svg"
import JMflag from "../../static/src/img/4x3/jm.svg"
import CUflag from "../../static/src/img/4x3/cu.png"
import CryptoJS from "crypto-js"
//import {emails} from "../../emails.js"

    function encrypt(message = '', key = ''){
        var message = CryptoJS.AES.encrypt(message, key);
        return message.toString();
    }
    export function decrypt(message = '', key = ''){
        var code = CryptoJS.AES.decrypt(message, key);
        var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

        return decryptedMessage;
    }

    /********** Contact Site Admin for email.js to append to encrypted email list   ************/
    /*
    for(let email of emails){
        console.log( email + " : " + encrypt(email,"1931") )
    }*/

    export const bros = [
        {
        name:"Andres Almeida",
        bname:"Benkos Biohó",
        line:"Los Rumis (Spring '19)",
        major:["Mechanical Engineering"],
        minor:["Computer Science"],
        graduation:"2022",
        hometown:"Cartagena, Colombia",
        nationality:["Colombian"],
        position:"Academic Chair",
        src:Andrespf,
        flagsrc:[COflag],
        email:"U2FsdGVkX19la99D+pYrpVnRtwiEo6iYtR3ek8AN/WNRPIwpVL0C5iyFjF4y/cxZ",
       
        },
        {
        name:"Antonio Anaya",
        bname:"Huitzilopo",
        line:"Siete Sueños (Spring '20)",
        major:["Electrical Engineering"],
        graduation:"2023",
        hometown:"New Rochelle, NY",
        nationality:["Mexican"],
        src:Tonypf,
        flagsrc:[MXflag],
        email:"U2FsdGVkX19/P9b+rFzNW2htix2lgO8cl/O6ITvNxtTyYKo7lf1nolwQPDOs/wR7",
        },
        {
        name:"Carlos Avila",
        bname:"Cora",
        line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
        major:["Mechanical Engineering"],
        graduation:"2020",
        hometown:"Phoenix, AZ",
        nationality:["Mexican"],
        position:"Secretary",
        src: Currentcrest,
        flagsrc:[MXflag],
        email:"U2FsdGVkX19v4fosswo5eV1X2MBzqYEvS4qIzUZhUFo=",
        },
        {
        name: "Ben Blake",
        bname:"Kahlo",
        line:"Los Turistas (Fall '17)",
        major:["Computer Science"],
        graduation:"2021",
        hometown:"Harrisonburg, VA",
        nationality:["Argentine"],
        position:"Treasurer",
        src:Benpf,
        flagsrc:[ARflag],
        email:"U2FsdGVkX1/oUJhFsUToIpoADumEivclO2omR+ZdpVjcEkgpChEQY2CiV+8YvIsc",
        },
        {
        name:"Cesar Bravo",
        bname:"Sumag Ñawi",
        line:"Siete Sueños (Spring '20)",
        major:["Chemical Engineering"],
        graduation:"2023",
        hometown:"Lindenhurst, NY",
        nationality:["Peruvian"],
        src:Cesarpf,
        flagsrc:[PEflag],
        email:"U2FsdGVkX1/qBWmuR5tdVZ77mEnV2HkUEumv4x6pBKMSW5Yc7uZqhJPneEVQdKCA",
        },
        {
        name:"Diego De Cabanyes",
        bname:"Melchor",
        line:"Los Rumis (Spring '19)",
        major:["Chemical and Biological Engineering"],
        graduation:"2022",
        hometown:"Ciudad de México, DF, México",
        nationality:["Mexican"],
        src:Diegopf,
        flagsrc:[MXflag],
        email:"U2FsdGVkX19eIzzOybfUiHuMIM+h5LpWIg19rlN8BzDf+MGz9H6s0/ehHTkHNNsT",
        },
        {
        name: "Jose Canales",
        bname:"Faby",
        line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
        major:["Civil Engineering"],
        graduation:"2022",
        hometown:"Yonkers, NY",
        nationality:["Honduran"],
        src:Josepf,
        flagsrc:[HNflag],
        flag:"U2FsdGVkX1/Cc3z+POtqzS16KVyBfEvKXFqSm4KKKHU=",
        },
        {
        name: "Daniel Familia",
        bname:"Mariposa",
        line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
        major:["Computer Science"],
        minor:["Information Technology & Web Science"],
        graduation:"2022",
        hometown:"Waterbury, CT",
        nationality:["Dominican"],
        position:"Web Chair",
        src: Familiapf,
        flagsrc:[DRflag],
        email:"U2FsdGVkX18kfqilD+CSWskUU4NxZXgYiT8eUggnQ+gP1l2F26mTp4XSoGfkUw4V",
        },
        {
        name:"Christian Franquiz",
        bname:"Tutiyo",
        line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
        major:["Chemistry", "Accelerated B.S./Ph.D."],
        graduation:"2021",
        hometown:"San Juan, PR",
        nationality:["Puerto Rican"],
        position:"Recruitment Chair",
        src: Franquizpf,
        flagsrc:[PRflag],
        email:"U2FsdGVkX18ifPkQ8wMyLytMGDp6yP2lCLAI1BlRP0+TH9L8o1z0bBimQGnTO3ZJ",
        },
        {
        name:"David Mata Jimenez ",
        bname:"Minero",
        line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
        major:["Computer Science"],
        minor:["Philosophy"],
        graduation:"2020",
        hometown:"San Antonio, TX",
        nationality:["Mexican"],
        position:"Community Service Chair",
        src: Currentcrest,
        flagsrc:[MXflag],
        email:"U2FsdGVkX1/T0YJZgG++JDqYy9c9qEWLdYfwAuMJlKMBz73s+O7ZJ8AgmYqWz5VS"
        },
        {
        name:"Giuseppe Molfino",
        bname:"Huaccha Khoyaq",
        line:"Siete Sueños (Spring '20)",
        major:["Aeronautical Engineering"],
        graduation:"2023",
        hometown:"Newark, NJ",
        nationality:["Peruivan","Italian"],
        position:"Social Chair",
        src: Molfinopf,
        flagsrc:[PEflag,ITflag],
        email:"U2FsdGVkX19+KQlSHOzUysQyVx4avPbtkds9XiRVINf+EL6dHh+7OQBpg3UDi5rt"
        },
        {
        name:"Sean Phulnauth",
        bname:"Monte",
        line:"Uptown (Spring '18)",
        major:["Mechanical Engineering"],
        graduation:"2021",
        hometown:"Bronx, NY",
        nationality:["Guyanese"],
        position:"President",
        src: Seanpf,
        flagsrc:[GYflag],
        email:"U2FsdGVkX19dk1VxziICOfprerT4VEsrzKQt1VD5aXNfUHS/h3OWkw05p6xZZSpL"
        },
        {
        name:"Alexander Pirovano",
        bname:"Hector",
        line:"Siete Sueños (Spring '20)",
        major:["Mechanical Engineering"],
        graduation:"2022",
        hometown:"Hazlet, NJ",
        nationality:[ "Argentine","Puerto Rican","Italian","Cuban"],
        src: Pirovanopf,
        flagsrc:[ARflag,PRflag,ITflag,CUflag],
        email:"U2FsdGVkX1/EOyqEVe9p1VcEwLLMNtnypP3pc49nWdfQ+ucugJrZgsS0h7LvIDAr",
        },
        {
        name: "Carlos Power",
        bname:"Power y Giralt",
        line:"Los Turistas (Fall '17)",
        major:["Information Technology & Web Science"],
        graduation:"2021",
        hometown:"Trujillo Alto, PR",
        nationality:["Puerto Rican"],
        position:"Alumni Relations Chair",
        src:Powerspf,
        flagsrc:[PRflag],
        email:"U2FsdGVkX180x+TLl5Fdn1Ab+GyzhZ55TEMI8Fg87DD2WLTvnC6yhnnZFFG69eTD"
        },
        {
        name:"Jonathan Punin",
        bname:"Bochi",
        line:"Siete Sueños (Spring '20)",
        major:["Computer Systems Engineering"],
        graduation:"2023",
        hometown:"Bronx, NY",
        nationality:["Ecuadorian"],
        src:Jonathonpf,
        flagsrc:[ECflag],
        email:"U2FsdGVkX19eMn09CsosmhtFLFUh9suWc/eQ3j8JIJr03wEy+WZcteDezqe8iu0u",
        },
        {
        name: "Marvin Rios",
        bname:"Kennedy",
        line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
        major:["Chemical Engineering"],
        graduation:"2021",
        hometown:"Egg Harbor Township, NJ",
        nationality:["Peruvian"],
        position:"Public Relations Chair",
        src:Marvinpf,
        flagsrc:[PEflag],
        email:"U2FsdGVkX1+GKxljc6/1nCdDRDBOwXQI/lLSbkv//ngWwZyovIQx0GGwvWo0NxHo",
        },
        {
        name:"Leonardo De La Rosa",
        bname:"Bairoa",
        line:"Siete Sueños (Spring '20)",
        major:["Aerospace Engineering"],
        graduation:"2023",
        hometown:"Caguas, PR",
        nationality:["Puerto Rican"],
        src:Leopf,
        flagsrc:[PRflag],
        email:"U2FsdGVkX1/WFTr8GTlrcSbXvuBrp1oDN8VfJdWtp7lKueXrnJcP2Ie/32Cb1Mvr",
        },
        {
        name:"Michael Sanchez",
        bname:"Principito",
        line:"Siete Sueños (Spring '20)",
        major:["Aeronautical Engineering"],
        graduation:"2023",
        hometown:"Bronx, NY",
        nationality:["Mexican"],
        src:Michaelpf,
        flagsrc:[MXflag],
        email:"U2FsdGVkX1+JvBECnY2i6/JChS5ZTgKIlxJIp84Xz9zt/0N/p2DCp5P8Idvtcniw",
        },
        {
        name:"Khaled Soliman",
        bname:"Nimr",
        line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
        major:["Aerospace Engineering"],
        graduation:"2021",
        hometown:"Brooklyn, NY",
        nationality:["Egyptian"],
        position:"Vice President",
        src:Khaledpf,
        flagsrc:[EGflag],
        email:"U2FsdGVkX197waUU8c6hPgPuQ1ol607SOmrnNaYvqlg=",
        },
        {
        name:"Gavin Tomlinson",
        bname:"Sfigato",
        line:"Uptown (Spring '18)",
        major:["Aerospace Engineering"],
        graduation:"2021",
        hometown:"Bronx, NY",
        nationality:["Jamaican"],
        position:"Fundraising Chair",
        src:Gavinpf,
        flagsrc:[JMflag],
        email:"U2FsdGVkX1+x8u+IlHS59mfRjC8TXxbcvuP53FRY/nzaZCTiSFPPbztKmPBtYvWt"
        },
        {
        name:"Ethan Wright",
        bname:"Selección",
        line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
        major:["Computer Science"],
        graduation:"2020",
        hometown:["Cordova, TN"],
        nationality:["Honduran"],
        flagsrc:[HNflag],
        email:"U2FsdGVkX1+b4EbO6UWy3B1PviL2kilpHGgkPV3tDSIPlesXeIZJgVfplvbB7xfs",
        },
        
    ]
    