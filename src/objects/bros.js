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
import Andrespf from "../../static/src/img/andres.jpg"
import Josepf from "../../static/src/img/josepf.jpeg"
import Diegopf from "../../static/src/img/cvdiegopic.jpeg"
import Aljandropf from "../../static/src/img/alejandropfpic.jpg"
import Armanipf from "../../static/src/img/armanipfpic.jpg"
import Marcpf from "../../static/src/img/marcprofilepc.jpg"
import DiegoTpf from "../../static/src/img/diegoTpf.jpg"
import Zurielpf from "../../static/src/img/zurielpf.jpg"
import Cristianpf from "../../static/src/img/cristianpf.png"
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
import PLflag from "../../static/src/img/4x3/pl.svg"
import CryptoJS from "crypto-js"
//import {emails} from "../../emails.js"

//var CryptoJS = require("crypto-js");

function encrypt(message = '', key = '') {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
export function decrypt(message = '', key = '') {
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

const newEmails = ['ojitos@phiota.net', 'huelio@phiota.net', 'ustalonado@phiota.net']
/********** Contact Site Admin for email.js to append to encrypted email list   ************/

for (let email of newEmails) {
    console.log(email + " : " + encrypt(email, "1931"))
}

export const bros = [
    {
        name: "Antonio Anaya",
        bname: "Huitzilopo",
        line: "Siete Sueños (Spring '20)",
        major: ["Electrical Engineering"],
        graduation: "2023",
        hometown: "New Rochelle, NY",
        nationality: ["Mexican"],
        src: Tonypf,
        flagsrc: [MXflag],
        email: "U2FsdGVkX19/P9b+rFzNW2htix2lgO8cl/O6ITvNxtTyYKo7lf1nolwQPDOs/wR7",
    },
    {
        name: "Cesar Bravo",
        bname: "Sumag Ñawi",
        line: "Siete Sueños (Spring '20)",
        major: ["Chemical Engineering"],
        graduation: "2023",
        hometown: "Lindenhurst, NY",
        nationality: ["Peruvian"],
        position: "Pledging Committee",
        src: Cesarpf,
        flagsrc: [PEflag],
        email: "U2FsdGVkX1/qBWmuR5tdVZ77mEnV2HkUEumv4x6pBKMSW5Yc7uZqhJPneEVQdKCA",
    },
    {
        name: "Armani Damiron",
        bname: "Ojitos",
        line: "Los Caribeños (Spring '21)",
        major: ["Mechanical Engineering"],
        graduation: "2023",
        hometown: "Bronx, NY",
        nationality: ["Dominican"],
        position: "Treasurer",
        src: Armanipf,
        flagsrc: [DRflag],
        email: "U2FsdGVkX19UE3K1PVK8A0R9AswO3HVmeUV9/o9yQl4wjTwMaHUf97ZJcF2+FeIA",
    },
    {
        name: "Daniel Familia",
        bname: "Mariposa",
        line: "Los Cuatro Elementos (Fall '19)",
        major: ["Computer Science"],
        graduation: "2022",
        hometown: "Waterbury, CT",
        nationality: ["Dominican"],
        position: "Vice-president",
        src: Familiapf,
        flagsrc: [DRflag],
        email: "U2FsdGVkX18kfqilD+CSWskUU4NxZXgYiT8eUggnQ+gP1l2F26mTp4XSoGfkUw4V",
    },
    {
        name: "Alejandro Lopez",
        bname: "Huelio",
        line: "Los Caribeños (Spring '21)",
        major: ["Aerospace Engineering", "Mechanical Engineering"],
        graduation: "2024",
        hometown: "San Juan, PR",
        nationality: ["Puerto Rican", "Mexican"],
        poition: "Pledging Committee",
        src: Aljandropf,
        flagsrc: [PRflag, MXflag],
        email: "U2FsdGVkX1/bYz4oJrWBw4FysaRoMGSOy3Djdq5jGdE5GQWsDUVJ4YkPkQ1Zx3Pv",
    },
    {
        name: "Marc Christopher Melendez",
        bname: "Ustalonado",
        line: "Los Caribeños (Spring '21)",
        major: ["Electrical Engineering"],
        graduation: "2024",
        hometown: "Queens, NY",
        position: "Vice-president",
        nationality: ["Puerto Rican", "Polish"],
        src: Marcpf,
        flagsrc: [PRflag, PLflag],
        email: "U2FsdGVkX19qSD/i1vc8hLe6f7+dMoHNiDpvaSXeASNbbeMHWjrP431B4RFAJP6b",
    },
    {
        name: "Giuseppe Molfino",
        bname: "Huaccha Khoyaq",
        line: "Siete Sueños (Spring '20)",
        major: ["Aeronautical Engineering"],
        graduation: "2023",
        hometown: "Newark, NJ",
        nationality: ["Peruvian", "Italian"],
        position: "Social/Risk Management Chair",
        src: Molfinopf,
        flagsrc: [PEflag, ITflag],
        email: "U2FsdGVkX19+KQlSHOzUysQyVx4avPbtkds9XiRVINf+EL6dHh+7OQBpg3UDi5rt"
    },
    {
        name: "Jonathan Punin",
        bname: "Bochi",
        line: "Siete Sueños (Spring '20)",
        major: ["Computer Systems Engineering"],
        graduation: "2023",
        hometown: "Washington Heights, NY",
        nationality: ["Ecuadorian"],
        position: "President",
        src: Jonathonpf,
        flagsrc: [ECflag],
        email: "U2FsdGVkX19eMn09CsosmhtFLFUh9suWc/eQ3j8JIJr03wEy+WZcteDezqe8iu0u",
    },
    {
        name: "Michael Sanchez",
        bname: "Principito",
        line: "Siete Sueños (Spring '20)",
        major: ["Aeronautical Engineering"],
        graduation: "2023",
        hometown: "Bronx, NY",
        nationality: ["Mexican"],
        src: Michaelpf,
        flagsrc: [MXflag],
        email: "U2FsdGVkX1+JvBECnY2i6/JChS5ZTgKIlxJIp84Xz9zt/0N/p2DCp5P8Idvtcniw",
    },
    {
        name: "Diego Terrazas",
        bname: "Cuauhtlatoatzin",
        line: " West Side (Spring '22)",
        major: ["Aeronautical Engineering"],
        graduation: "2024",
        hometown: "Phoenix, AZ",
        nationality: ["Mexican"],
        src: DiegoTpf,
        flagsrc: [MXflag]
    },
    {
        name: "Zuriel Aviles",
        bname: "Cereal",
        line: " West Side (Spring '22)",
        major: ["Computer Science"],
        graduation: "2024",
        hometown: "Long Beach, CA",
        nationality: ["Mexican"],
        src: Zurielpf,
        flagsrc: [MXflag]
    },
    {
        name: "Cristian Mejia",
        bname: "Montesinos",
        line: "El Quisqueyano (Fall '21)",
        major: ["Computer Systems Engineering", "Information Technology & Web Science"],
        graduation: "2024",
        hometown: "Paramus, NJ",
        position: ["Secretary, Web Chair"],
        nationality: ["Dominican"],
        src: Cristianpf,
        flagsrc: [DRflag]

    }

]
