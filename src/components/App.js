import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Movies from "../movies";

function createCard(movie) {
    return (
        <Card 
            key={movie.id}
            movieName = {movie.name}
            mSrc = {movie.image}
        />
    )
}

export default function App() {
    return <div>
            {Movies.map(createCard)}
             <Footer />
    </div>
}