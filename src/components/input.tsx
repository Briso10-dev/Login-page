import React from "react"

// Interface definition
export type inputProps = {
  name:string,
  icon:React.Component,
  label:string,
  placeholder: string
}

export function Input() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}