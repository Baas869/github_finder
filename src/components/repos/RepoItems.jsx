import * as FaIcons from 'react-icons/fa'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'


function RepoItems({ repos }) {
    const { loading } = useContext(GithubContext)

    const { 
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repos

    if(loading){
        return <Spinner />
      }else{
        return (
            <div className='mb-2 rounded-md card bg-gray-800 
            hover:bg-gray-900'>
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={html_url}> 
                    <FaIcons.FaLink className='inline mr-1' />
                    {name}
                    </a>
                </h3>
                <p className="mb-3">{description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg">
                        <FaIcons.FaEye className='mr-2' />{watchers_count}
                    </div>
                    <div className="mr-2 badge badge-success badge-lg">
                        <FaIcons.FaStar className='mr-2' />{stargazers_count}
                    </div>
                    <div className="mr-2 badge badge-error badge-lg">
                        <FaIcons.FaInfo className='mr-2' />{open_issues}
                    </div>
                    <div className="mr-2 badge badge-warning badge-lg">
                        <FaIcons.FaUtensils className='mr-2' />{forks}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

RepoItems.propTypes = {
    repos: PropTypes.object.isRequired
}

export default RepoItems
