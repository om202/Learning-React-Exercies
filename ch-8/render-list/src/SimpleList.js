const peaks = [
    {name: "peak1", elevation: 1000},
    {name: "peak2", elevation: 2000},
    {name: "peak3", elevation: 4000},
    {name: "peak4", elevation: 3000},
    {name: "peak5", elevation: 6000},
    {name: "peak6", elevation: 7000},
    {name: "peak7", elevation: 5000}
]

function list(data=[], renderEmpty) {
    if(data.length===0) return <p>{renderEmpty}</p>;
    return data.map((peak, index) => (
        <li key={index}>
            {peak.name} - {peak.elevation}
        </li>
    ))
}

export default function SimpleList() {
    return (
        <div>
            <ul>
                {
                    list(peaks, "No data")
                }
            </ul>
        </div>
    )
}