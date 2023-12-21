import RepoItems from "./RepoItems"
import Spinner from '../layout/Spinner'
import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"


function ReposLists({ repos }) {
  const { loading } = useContext(GithubContext)
 
  if(!loading){
    return (
      <div className="rounded-lg shadow-lg card bg-base-100">
          <div className="card-body">
              <h2 className="tex-3xl my-4 font-bold card-title">
                  Latest Repositories
              </h2>
              
              {!loading && repos.map((repo) =>(
                <RepoItems key={repo.id} repos={repo} />
              ))}
          </div>
      </div>
    )
  }else{
    return <Spinner />
  }

  // if(!loading){

  //   return (
  //     <div className="rounded-lg shadow-lg card bg-base-100">
  //         <div className="card-body">
  //             <h2 className="tex-3xl my-4 font-bold card-title">
  //                 Latest Repositories
  //             </h2>
              
  //             {loading === false && repo.map((repos) => (
  //               <RepoItems key={repos.id} repos={repos} />
  //             ))}
  //         </div>
  //     </div>
  //   ) 
  // }else{
  //   <Spinner />
  // }
}

export default ReposLists
