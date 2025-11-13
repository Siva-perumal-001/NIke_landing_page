const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button 
    className={`text-lg border leading-none font-montserrat flex justify-center 
        items-center px-7 py-4 gap-2
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
        : `bg-coral-red border-coral-red text-white`} rounded-full ${fullWidth && 'w-full'}"}`}
    >
        {label}
        {iconURL && <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button