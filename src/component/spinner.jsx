import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({loading}) => {

  return (
    <>
      <h1 className='text-3xl text-indigo-500 font-bold text-center pt-20'>
        Fetching the data......
      </h1>
      <ClipLoader 
          color='#4338ca'
          loading={ loading }
          cssOverride={{display:'block',margin:'100px auto'}}
          size={150}
      />
    </>
      
  )
}

export default Spinner