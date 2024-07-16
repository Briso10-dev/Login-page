import React from "react"
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

// Interface definition
export type inputProps = {
  name: string,
  icon: React.Component,
  label: string,
  placeholder: string
}

function Input() {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="abcexample@.com" className="input" />
      
    </div>
  )
}

export default Input