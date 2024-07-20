import React, { useState } from "react";
import { Input } from "./input"
import Button from "./button"
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Form() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            console.log(`Form submitted with data:${name},${email},${password}`);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="h-[100vh] flex-1">
            <form
                onSubmit={handleSubmit}
                className="w-[45rem] h-full mx-auto flex flex-col px-4 py-[13rem] gap-[5.5rem]"
            >
                <h1 className="text-6xl text-secondary_color">Connexion a Blue Ocean</h1>
                <Input
                    label="Username"
                    type="text"
                    name="name"
                    icon={FaRegUser}
                    placeholder="Briso"
                    value={name}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setName(e.target.value)
                    }}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    icon={MdOutlineMail}
                    placeholder="example.com@gmail.com"
                    value={email}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setEmail(e.target.value)
                    }}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    icon={CiLock}
                    placeholder="********"
                    value={password}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        setPassword(e.target.value)
                    }}
                />
                <p className="pt-2 text-2xl text-right underline text-primary_color">
                    <a href="">Mot de passe oublié?</a>
                </p>

                <Button name="Connexion" type="submit" />
                <footer className="flex flex-col gap-[3rem] w-full h-[100vh] pt-[1rem]">
                    <div className="flex items-center gap-6">
                        <hr className="border-solid border-[0.1rem] border-border_color w-[16rem]" />
                        <p className="text-2xl">ou avec</p>
                        <hr className="border-solid border-[0.1rem] border-border_color w-[16rem]" />
                    </div>
                    <div className="flex items-center justify-around">
                        <a href=""><FcGoogle className="w-[8rem] h-[6rem]" /></a>
                        <a href=""><FaFacebook className="w-[8rem] h-[6rem] text-[#1877F2]" /></a>
                        <a href=""><FaGithub className="w-[8rem] h-[6rem] text-[gray]" /></a>
                    </div>
                </footer>
            </form>
        </div>
    )
}