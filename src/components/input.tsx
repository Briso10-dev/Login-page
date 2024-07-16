import React from "react"
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

// Interface definition
export interface inputProps {
  name: string
  type: string
  label: string
  placeholder: string
}

const Input: React.FC<inputProps> = ({ name, type, label, placeholder }) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />

    </div>
  )
}

export default Input