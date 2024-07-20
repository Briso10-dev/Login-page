import { IconType } from "react-icons";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  icon: IconType;
  label: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ 
  name, 
  icon: IconComponent, 
  type, 
  label, 
  placeholder, 
  onChange,
  ...rest 
}) => {  
  return (
    <div className="flex flex-col justify-center gap-10 w-[20rem]">
      <label htmlFor={name} className="text-4xl text-secondary_color">{label}</label>
      <div className="relative w-[42rem] h-[2rem]">
        <IconComponent className="absolute text-2xl text-gray-500 left-3 top-9" />
        <input 
          id={name}
          className="w-full h-full outline-none rounded-[1.2rem] border-[0.1rem] border-solid border-border_color p-12 text-[1.6rem]"
          {...{name, type, placeholder, onChange}}
          {...rest}
        />
      </div>
    </div>
  )
}