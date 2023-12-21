import { createContext, useReducer } from "react"
import githubReducer from "./Githubreducer"

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
  
    // const getData = async(e) => {
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()

    //     console.log(data)
    // }
    // getData()
    //Get inital users (testing purposes)
    // const fetchUsers = async () =>{
    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}`)

    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })

    // }

   
   
    

    
    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext