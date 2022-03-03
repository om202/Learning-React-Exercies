export default function List({data, renderItem, renderEmpty}) {
    if(data.length===0) return <p>{renderEmpty}</p>

    return (
        data.map(
            (item, index) => (
                renderItem(item)
            )
        )
    )
}