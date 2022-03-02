  // Using fetch
  fetch('http://api.github.com/users/om202')
  .then(response => response.json())
  .then(resJson =>  console.log('Using fetch ',resJson))
  .catch(err => console.log('Any error?', err))

// using async/await
async function requestGithubUser(githubLogin) {
    try {
        const response = await fetch(
            `https://api.github.com/users/${githubLogin}`
        );
        const userData = await response.json();
        console.log("Using async/await ", userData)
    } catch (error) {
        console.log("Error? ", error)
    }
}

//post data
// fetch('/create/user', {
//     method: "POST",
//     body: JSON.stringify({username: "om202", password:"Hello1234#"})
// })

requestGithubUser('om202')

export default function FetchingWays() {
    return <>Fetching Ways</>
}