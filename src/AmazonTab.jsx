import Amazon from "./Amazon.jsx";

const AmazonTab = () => {
    let styles ={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"

    };
    return(
        <div style = {styles}>
        <Amazon title="Logitech MX Master 3S" description ={["8,000 DPI", "5 Progamming Buttons"]} idx={0} />  
        <Amazon title="Apple Pencil (2nd Gen)" description ={["Intuitive touch surface", "Designed for iPad Pro8"]}  idx={1}/>  
        <Amazon title="Zebronics Zeb-Transformer" description ={["Intuitive touch surface", "Designed for iPad Pro8"]}  idx={2}/>  
        <Amazon title="Portronics Toad 23 Wireless Mouse" description ={["Wireless Mouse 2.4GHz", "Optical Orientation8"]}  idx={3}/>  
        </div>
    )
}

export default AmazonTab;