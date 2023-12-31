 import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

 const github = axios.create({
    baseURL: GITHUB_URL,
    // headers: { Authorization: `token ${GITHUB_TOKEN}`}
 })
 
 //Get search results
 export const searchUsers = async (text) =>{

    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)

    return response.data.items
    // const response = await fetch(`http://api.github.com/search/users?${params}`)

    // const {items} = await response.json()

    // return items

}
//Get user and repos 
export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return {user: user.data, repos: repos.data}
}

//  //Get single user
//  export const getUser = async (login) =>{

    
//     const response = await fetch(`http://api.github.com/users/${login}`)

//     if(response.status === 404) {
//         window.location = '/notfound'
//     }else{
//         const data = await response.json()

//         return data

//     }
        
// }
// // const [isLoading, setIsLoading] = useState()
// //Get User Repo
// export const getRepo = async(login) =>{
    
//     // setIsLoading(true)
//     const params = new URLSearchParams({
//         sort: 'created',
//         per_page: 10,
//     })
//     const resRepo = await fetch(`http://api.github.com/users/${login}/repos?${params}`)
   
//     const repoData = await resRepo.json()

//     // const datas = await repoData


//     return repoData
//     // setIsLoading(false)
// }

