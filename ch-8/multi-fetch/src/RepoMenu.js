import {useIterator} from './iteratorHook'
import {useEffect} from "react"

export default function RepoMenu({
    repos, onSelect
}) {
    const [{name}, prev, next] = useIterator(repos)

    useEffect(() => {
        if(!name) return;
        onSelect(name);
    }, [name])

    console.log("Name ", name)

    return (
        <div style={{display: "flex"}}>
            <button onClick={prev}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
        </div>
    )
}