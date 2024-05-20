import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useEffect } from 'react';





const AddJob = ({ addJobSubmit }) => {

  const navigate = useNavigate();

  const{ 
        register,
        handleSubmit, 
        formState:{ errors},
        //  watch
        } = useForm({
          defaultValues:{
            title: "",
            type: "fullTime",
            description: "",
            location: "",
            salary: "under-50K",
            company:{
              name:'',
              description:'',
              contactEmail:'',
              contactPhone: "",
            }
          }
        });

//         useEffect(()=>{
//           const sub = watch((data)=>{
//             console.log(data)
//           })

//           return ()=>{
//             console.log('return')
//             sub.unsubscribe();
//           }
//         },[watch])
        


  return (

      <form onSubmit={ handleSubmit((data)=>{ 
        addJobSubmit(data);
        toast.success('Job added successfully!')
        return navigate('/jobs')

        })} className='addJobForm'>
        <h1 className='text-xl font-bold'>Add a Job</h1>

        <p className='addJobLabel'>Job Type:</p><br />
        <select {...register("type")} className='addJobInput'>
          <option value="fullTime">Full-Time</option>
          <option value="partTime">Part-Time</option>
          <option value="freelance">Freelance</option>
        </select><br /><br />

        <p className='addJobLabel'>Job Listing Name:</p><br />
        <input 
          className='addJobInput'
          {...register('title',{
            required: 'This field is require.',
            minLength:{
              value: 5,
              message: 'Can not be less than 5 letters.'
            },
            // validate:(value,formValue)=>console.log(value,formValue)
          })}
          placeholder= 'eg: Front-End Developer'
          type='text'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.jobName?.message}</p><br /><br />
        
        <p className='addJobLabel'>Job Description:</p><br />    
        <textarea 
          {...register("description",{
            required: 'This field is require.'
          })} 
          className='addJobInput border-2'
          placeholder='This job is ......'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.jobDescription?.message}</p><br /><br />

        <p className='addJobLabel'>Salary:</p><br />
        <select {...register("salary")} className='addJobInput'>
          <option value="under-50K">Under 50K</option>
          <option value="50K-100K">50K - 100K</option>
          <option value="above 100K">Above 100K</option>
        </select><br /><br />

        <p className='addJobLabel'>Job Location:</p><br />
        <input 
          className='addJobInput'
          {...register('location',{
            required:'This field is required.',
            minLength:{
              value: 5,
              message:'Can not be less than 5 letters.'
            }
          })}
          placeholder='Company Location'
          type='text'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.jobLocation?.message}</p><br /><br />

        <p className='addJobLabel text-indigo-500 text-xl'>Company Information:</p><br /><br />

        <p className='addJobLabel'>Company Name:</p><br />
        <input 
          className='addJobInput'
          {...register('company.name',{
            required:'Company name is required.'
          })}
          placeholder='Company Name'
          type='text'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.companyName?.message}</p><br /><br />

        <p className='addJobLabel'>Company Description:</p><br />
        <textarea 
          {...register("company.description",{
            required:'Company description is required.'
          })} 
          className='border-2 addJobInput'
          placeholder='This company established in ......'
          type='text'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.companyDescription?.message}</p><br /><br />

        <p className='addJobLabel'>Company Email:</p><br />
        <input 
          className='addJobInput'
          {...register('company.contactEmail',{
            required:'Company email is required.'
          })}
          placeholder='eg: name@gmail.com'
          type='email'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.companyEmail?.message}</p><br /><br />

        <p className='addJobLabel'>Company Phone:</p><br />
        <input 
          className='addJobInput'
          {...register('company.contactPhone',{
            required: 'Company phone number is required.'
          })}
          placeholder='eg: 555-555555'
          type='text'
        />
        <p className='text-sm text-red-500 float-start'>{ errors.companyPhone?.message}</p><br /><br />
      




        <button type='submit' className='bg-indigo-500 text-white rounded-md py-1 px-2'>
          Submit
        </button>

      </form>
 
    
  )
}

export default AddJob