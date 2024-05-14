import Card from "./card"


const HomeCards = () => {

    const users = [
        {   
            title:'For Developers',
            intro:'Looking for React job and start it today!',
            link:'Browse Jobs'
        },
        {
            title:'For Employers',
            intro:'List your jobs and fond the best ones.',
            link:'Post Jobs'
        }
    ]

    const show = users.map(obj=>(
        <div key={obj.title}>
            <Card props={obj}/>
        </div>
        
    ));

  return (

    <div className="grid grid-cols-2 m-6 gap-4">
       { show } 
    </div>
  )
}

export default HomeCards