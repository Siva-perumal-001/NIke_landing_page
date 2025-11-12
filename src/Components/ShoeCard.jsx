const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {

const HandleClick = ()=>{
    if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
}

  return (
    <div className={`border-2 rounded-xl 
        ${bigShoeImg ===imgURL.bigShoe
        ? 'border-coral-red'
        : 'border-transparent'}
    `}
    onClick={HandleClick} 
    >
        <div className="flex justify-center items-center bg-cover bg-center bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt="Shoe-collection" width={127} height={103} className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard