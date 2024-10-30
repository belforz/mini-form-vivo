import React from "react";
import Form from "./components/form";
import Slideshow from "./components/slideshow";


export function App(){

    // throw new error ('Lol')
    return(
        <>

       <div className="background-image-vivo">
        <div className="absolute inset-0 items-center justify-center">
            <Slideshow />
        {/* <Form /> */}
       </div>
       </div>
       
        </>
       
    )
}