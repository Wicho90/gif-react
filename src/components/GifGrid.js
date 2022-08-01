import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs( category );

  return (
    <>
        <h3 className="animate__animated animate__fadeIn"> { category }</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>} {/*  si el primero es true hace lo segundo y si no es no hace nada */}
        <div className="card-grid">
        {
            images.map(img => (
                <GifGridItem 
                    key={img.id} 
                    {...img}
                />
            ))
        }
        </div>
    </>
  );
};

/*images.map(img =>  
    <div key={img.id}>    
        <h1> {img.title} </h1>
        <img src={img.url} />
    </div>)*/
