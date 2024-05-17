import { useForm } from 'react-hook-form';

const AddJob = () => {

  const{ register, handleSubmit} = useForm();



  return (
    <form onSubmit={ handleSubmit((data)=>{ console.log(data) })}>
      <input 
        {...register('names')} 
        type='text'
        placeholder='Name'
        className='border-2'
      />
    </form>
  )
}

export default AddJob