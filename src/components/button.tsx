type buttonProps = {
    name: string;
    type: "submit" | "reset";
  };

export default function Button(props:buttonProps) {
    return (
        <div className="w-[55%] mx-auto  border-2">
            <button className="text-[2rem] px-4 py-2 text-border_color bg-primary_color rounded-[1.5rem] w-[20rem] h-[5.5rem]"
            type={props.type}
            >
                Connexion</button>
        </div>
    )
}