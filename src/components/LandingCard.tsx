interface LcProps {
    product: string,
    price: number,
    img: any
}
const LandingCard:React.FC<LcProps> = ({ product, price, img}) => {
    return (
        <>
        <div className="flex flex-column font-serif items-center">
            <img className="w-full h-[400px] object-none object-center mb-4" alt="" src={img}/>
            <p className="text-xl mb-1">{product}</p>
            <p className="text-2xl text-gray-400">AED {price}.00</p>
        </div>
        </>
    )
}

export default LandingCard;