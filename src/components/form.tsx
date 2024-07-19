import {Input} from "./input"
import Button from "./button"
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Form() {
    return (
        <div className="h-[100vh] flex-1">
            <form className="w-[45rem] h-full mx-auto  flex flex-col px-4 py-[5rem] gap-[5.5rem]" action="submit">
                <h1 className="text-6xl text-secondary_color">Connexion a Blue Ocean</h1>
                <Input label="Email" type="Email" name="email" icon={MdOutlineMail} placeholder="example@gmail.com" />
                <Input label="password" type="password" name="password" icon={CiLock} placeholder="********" />
                <p className="pt-2 text-2xl text-right underline text-primary_color"><a href="">Mot de passe oublié? </a></p>

                <Button />
                <footer className="flex flex-col gap-[3rem] w-full h-[100vh] pt-[1rem]">
                    <div className="flex items-center gap-6">
                        <hr className="border-solid border-[0.1rem] border-border_color w-[16rem]" />
                        <p className="text-2xl">ou avec</p>
                        <hr className="border-solid border-[0.1rem] border-border_color w-[16rem]" />
                    </div>
                    <div className="flex items-center justify-around">
                        <a href=""><FcGoogle className="w-[8rem] h-[6rem]" /></a>
                        <a href=""><FaFacebook className="w-[8rem] h-[6rem] text-[#2697c4]" /></a>
                        <a href=""><FaGithub className="w-[8rem] h-[6rem] text-[gray]" /></a>
                    </div>
                </footer>
            </form>
        </div>
    )
}