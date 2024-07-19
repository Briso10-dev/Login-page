import { IconType } from "react-icons";
import { useState } from "react";
// Interface definition
export interface inputProps {
  name: string
  icon: IconType  
  type: string
  label: string
  placeholder: string
}

export const Input: React.FC<inputProps> = ({ name,icon:IconComponent,type, label, placeholder }) => {
  const [number,setNumber] = useState(0) 
  return (
    <div className="flex flex-col justify-center gap-10 w-[20rem]">
      <h1>{number}</h1>
      <label htmlFor={name} className="text-4xl text-secondary_color">{label}</label>
      <div className="relative w-[42rem] h-[2rem]">
      <IconComponent className="absolute text-2xl text-gray-500 left-3 top-9" />
        <input type={type} name={name} placeholder={placeholder} className="w-full h-full outline-none rounded-[1.2rem] border-[0.1rem] border-solid border-border_color p-12 text-[1.6rem]"
        onKeyDown={():void=>{
          setNumber(number + 1)
        }}/>
      </div>
    </div>
  )
}