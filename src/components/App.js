// create your App component here

import React, { useState, useEffect} from "react";


function App(){
    const [dogImg, setDogImg] = useState(null);

    useEffect(()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{setDogImg(data.message);
            // console.log(data);
        });

    }, []);

    if (!dogImg)
    return <p>Loading...</p>;
    else return <img src={dogImg} alt=" A Random Dog"/>;

}
export default App;
