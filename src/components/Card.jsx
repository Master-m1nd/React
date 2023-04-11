import Button from "./Button/Button";
import HeartButton from "./Button/HeartButton";

const saleIcon = '../../images/sale.png'

    function Card({img, title, description, price, onSale, inStock}) {
        return(
        <>
        <div className="card">
            <div className="picture" style={{backgroundImage:`url(${img})`}}></div>  
            <HeartButton/>  
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{price}</span>
            {onSale && <img className="sale" src={saleIcon} alt=''/>}
            <div className="btns">
               <Button text='LEARN MORE' isLight={false}/>
                {inStock && <Button text='BUY NOW' isLight={true}/>}
            </div>
        </div>
        </>
    )
}

export default Card;