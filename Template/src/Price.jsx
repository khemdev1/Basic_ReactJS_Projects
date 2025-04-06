import './price.css';

const Price = ({oldprice, newprice}) => {
    return(
        <div className='price-container'>
            <span id="old">{oldprice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="new">{newprice}</span>
        </div>
    )
}

export default Price;