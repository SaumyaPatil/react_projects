import { useEffect, useState } from "react"

export default function RandomColor(){

    const [typeOfColour, setTypeOfColour] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length){
        // What does floor function do?
        return Math.floor(Math.random()*length);
    }

    function handleCreateHexColor(){
        //The random color will be based on the length of this hex array that you have created.
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRgbColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    // This function works when we click on either of the buttons Create HEX colour or Create RGB colour cause when you click on those 
    // buttons just the text HEX or RGB gets changed but the functions are not triggered
    
    useEffect(()=>{
        if(typeOfColour === 'rgb')handleCreateRgbColor();
        else handleCreateHexColor();
    },[typeOfColour]);

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            background: {color},
        }}>
            {/* You just define the particular function to be called */}
            <button onClick={()=>setTypeOfColour("hex")}>Create HEX Colour</button>
            <button onClick={()=>setTypeOfColour("rgb")}>Create RGB Colour</button>
            <button onClick={typeOfColour === "hex" ? handleCreateHexColor : handleCreateRgbColor}>Generate Random Color</button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    marginTop: "50px",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >
                <h1>{typeOfColour === "rgb" ? "RGB Color" : "HEX Color"}</h1>
                <h1>{color}</h1>
            </div>
        </div>
    );
}
