const Button = ({label,iconURL}) => {
  return (
    <button className="bg-coral-red border-coral-red text-white 
        rounded-full leading-none font-montserrat flex justify-center 
        items-center px-7 py-4 gap-2"
    >
        {label}
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button