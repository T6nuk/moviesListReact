import React from "react";
import ReactDOM from "react";
import Card from "./Card";
import Footer from "./Footer";

export default function App() {
    return <div>
        <Card movieName="A Nightmare on Elm Street" mSrc="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wGTpGGRMZmyFCcrY2YoxVTIBlli.jpg"/>
        <Card movieName="The Shining" mSrc="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg"/>
        <Card movieName="Aline (1979)" mSrc="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bk9GVjN4kxmGekswNigaa5YIdr5.jpg"/>
        <Footer />
    </div>
}