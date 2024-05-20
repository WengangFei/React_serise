import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {

  const navigate = useNavigate();


  const{ 
    register,
    handleSubmit, 
    formState:{ errors},
    //  watch
    } = useForm({
      defaultValues:{
        name: "",
        phone: "fullTime",
        email: "",
        question: "",
      }
    });



return (

  <form onSubmit={ handleSubmit((data)=>{ 
    
    toast.success('Your question sent out successfully!')
    console.log(data)
    return navigate('/')

    })} className='addJobForm'>
    <h1 className='text-xl font-bold pb-10'>Contact Information:</h1>

    <p className='addJobLabel'>Name:</p><br />
    <input 
      className='addJobInput'
      {...register('name',{
        required: 'This field is require.',
        minLength:{
          value: 3,
          message: 'Can not be less than 3 letters.'
        },
        // validate:(value,formValue)=>console.log(value,formValue)
      })}
      placeholder= 'Your name'
      type='text'
    />
    <p className='text-sm text-red-500 float-start'>{ errors.name?.message}</p><br /><br />
    
    <p className='addJobLabel'>Question Description:</p><br />    
    <textarea 
      {...register("question",{
        required: 'This field is require.',
        minLength:{
          value:20,
          message:'Your question can not be less than 20 letters.'
        }
      })} 
      className='addJobInput border-2'
      placeholder='Please write down your question.'
    />
    <p className='text-sm text-red-500 float-start'>{ errors.question?.message}</p><br /><br />

    <p className='addJobLabel'>Contact Phone Number:</p><br />
    <input 
      className='addJobInput'
      {...register('phone',{
        required:'Company name is required.'
      })}
      placeholder='Company Name'
      type='number'
    />
    <p className='text-sm text-red-500 float-start'>{ errors.phone?.message}</p><br /><br />

    <p className='addJobLabel'>Email:</p><br />
    <input 
      className='addJobInput'
      {...register('email',{
        required:'Company email is required.'
      })}
      placeholder='eg: name@gmail.com'
      type='email'
    />
    <p className='text-sm text-red-500 float-start'>{ errors.email?.message}</p><br /><br />


    <button type='submit' className='bg-indigo-500 text-white rounded-md py-1 px-2'>
      Submit
    </button>

  </form>


)
}

export default Contact