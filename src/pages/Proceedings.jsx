import React from 'react'
import { journals } from '../../data'

const Proceedings = () => {

    return (
        <div className="h-auto w-auto bg-slate-100">
            <img src="./images/cloud-main-img.jpg" alt="cloud" className=' w-full md:h-auto' />
            <h1 className='text-center font-bold text-4xl'>PROCEEDINGS</h1>
            <div className="flex flex-col items-center justify-center w-3/6 ">
                {journals.filter(journal=>journal.rank === "proceeding").map(journal=>(
                    <div className="">
                        <p>{journal.proceedingTitle}</p>
                        <h3>{journal.title}</h3>
                        <p>{journal.abstract }</p> 
                        <p>Authors{journal.authors.map(author=>(
                            <span>{author}</span>
                        ))}</p>
                        <p>Proceeding Number: {journal.proceedingNo}</p>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proceedings