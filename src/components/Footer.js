import React from "react";
import ReactDOM from "react-dom";

export default function Footer(){
    const year = new Date().getFullYear();
    return <footer>
        <p>Copyright &#169;{year}
        <br></br>
        Tõnu Koll
        </p>
    </footer>
}