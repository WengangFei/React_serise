import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({loading}) => {

  const css = {
    display:'block',
    margin:'100px auto'
  }

  return (
    
      <ClipLoader 
          color='#4338ca'
          loading={loading}
          cssOverride={css}
          size={150}
      />
  )
}

export default Spinner