import react, {useRef} from "react";

export default function AddColorForm(){
    const txtTitle = useRef()
    const hexColor = useRef()

    const submit = e => {}

    return (
        <form>
            <input type="text" placeholder="color title" required/>
            <input type="color" required/>
            <button> Add </button>
        </form>
    )
}