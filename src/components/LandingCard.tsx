interface LcProps {
    product: string,
    price: number,
    img: any
}
const LandingCard:React.FC<LcProps> = ({ product, price, img}) => {
    return (
        <>
        <div>
            <img alt="" src={img}/>
            <p>{product}</p>
            <p>{price}</p>
        </div>
        </>
    )
}

export default LandingCard;