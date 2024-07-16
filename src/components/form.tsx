import Input from "./input"
import Button from "./button"

function Form() {
    return (
        <form className="flex flex-col gap-5" action="">
            <h1>Connexion a Blue Ocean</h1>
            <div className="flex flex-col gap-4">
                <Input label="Email" type="Email" name="email" placeholder="example@gmail.com" />
                <Input label="password" type="password" name="password" placeholder="********" />
                <p>Mot de passe oublié? </p>
                <Button />
            </div>
            <div className="flex">
                <hr />
                <span>ou avec</span>
                <div></div>
            </div>
            <footer>

            </footer>
        </form>
    )
}

export default Form