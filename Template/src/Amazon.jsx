import './Amazon.css';
import Price from "./Price.jsx";

const Amazon = ({title, description, idx}) => {
    let oldprice = ["12,495", "11,900", "1,599", "599"];
    let newprice = ["8,999",  "9,199", "899", "278"];
    return(
        <div className="amazon">
            <h4>{title}</h4>
            <ul>{description.map((des) => (<li>{des}</li>))}</ul>
            <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
    )
}

export default Amazon;  