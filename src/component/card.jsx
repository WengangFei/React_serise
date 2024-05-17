import { Link } from 'react-router-dom';

const Card = ({ props }) => {

 
  return (
    <div className={`rounded-md ${props.title === 'For Developers'?'bg-indigo-300':'bg-gray-200'} m-4 p-6 text-center`}>
        <h1 className="text-3xl font-bold my-4">
            { props.title }
        </h1>
        <p className="font-bold mb-4">{ props.intro }</p>
        <Link className={`${props.title === 'For Developers'?'bg-indigo-500 ':'bg-black'} text-white py-1 px-2 rounded-md my-4`}
          to={`${props.link === 'Browse Jobs' ? '/jobs':'./add-job'}`}
        >
            { props.link }
        </Link>
    </div>
  )
}

export default Card