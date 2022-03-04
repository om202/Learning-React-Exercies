import Fetch from "./Fetch"
import UserRepos from "./UserRepos"

function UserDetails(data) {
    return (
        < div style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "3rem"}}>
            <img src={data.avatar_url} alt={data.login} style={{width: 200, "borderRadius": "8px"}}/>

                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            <UserRepos login={data.login} onSelect={()=>console.log("Selected")}/>
        </div>
    )
}

export default function GithubUser({login}) {
    return (
       <Fetch uri={`https://api.github.com/users/${login}`} renderSuccess={UserDetails}/>
    )
}