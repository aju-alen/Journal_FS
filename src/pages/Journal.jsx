import React from 'react'
import { Link } from 'react-router-dom'
import { journals } from '../../data'
import { sortJournalByAZ } from '../helperFunctions'
import { journalCategory } from '../../data'
import ListJournalBySubject from '../components/ListJournalBySubject'
const Journal = () => {

  const sortedJournal = sortJournalByAZ(journalCategory) 


  return (
    <div className="h-auto w-auto bg-slate-100">
      <img src="./images/cloud-main-img.jpg" alt="cloud" className=' w-full md:h-auto' />
      <h1 className=' text-3xl font-semibold mb-6 text-center'>Journals</h1>
      <div className="min-h-screen md:flex  gap-6 md:p-10">
        <div className=" md:w-2/6   rounded ">
        <h2 className="  text-3xl font-semibold mb-6 text-center">
        Browse By Subject
        </h2>
          <ListJournalBySubject/>
        </div>
        <div className="w-full">
        <h2 className='text-3xl font-semibold mb-6'>Journals by Title</h2>
          <div className=" flex flex-col item gap-7 p-6">
            {Object.entries(sortedJournal).map(([key,value]) => (
             <React.Fragment key={key} >
              
              <div className=" text-left p-2 text-5xl underline  ">
                {key}
              </div>
              <div className="">
                {value.map(data=>(
                  <Link key={data.id} className=" ml-5 flex flex-col mb-6 font-bold text-blue-500">
                    
                    {data.title}
                  </Link>
                ))}
              </div>
             </React.Fragment>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Journal


