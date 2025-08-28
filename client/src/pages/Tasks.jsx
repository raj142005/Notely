import { useState } from "react"

export default function Tasks(){

    const[tasks,setTasks] = useState([]);

    const addTasks = () => {
        const newTasks = {
            title:"New Tasks",
            description:"This is a new Tasks",
            priority_tags:"High",
            date:new Date().toLocaleDateString(),
            work_tag:"Work"
        };

        setTasks([...tasks,newTasks]);
    };

    return(
        <>
            <div className='text-center max-w-5xl mx-auto px-4'>

                <div className='flex flex-col text-center mb-5 '>
                    <h1 className='text-5xl font-bold m-3 p-4'>Task Management</h1>
                    <h1 className='text-xl'>Stay organized and productive with intelligent task tracking and deadline <br/> management.</h1>
                </div>

                    <div className='grid grid-cols-3 gap-4 mb-6'>
                        <div className='border-2 border-black px-4 py-2 rounded-lg bg-blue-300 w-full h-32 flex items-center justify-center'>Total Tasks</div>
                        <div className='border-2 border-black p-4 rounded-lg bg-yellow-200 w-full h-32 flex items-center justify-center'>Active Tasks</div>
                        <div className='border-2 border-black p-4  rounded-lg bg-green-200 w-full h-32 flex items-center justify-center'>Completed</div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-4'>
                            <div className='border-2 border-black p-4  rounded-lg bg-blue-100 w-36 h-10 flex items-center justify-center'>All Tasks ()</div>
                            <div className='border-2 border-black p-4  rounded-lg bg-blue-100 w-36 h-10 flex items-center justify-center'>Active ()</div>
                            <div className='border-2 border-black p-4  rounded-lg bg-blue-100 w-36 h-10 flex items-center justify-center'>Completed ()</div>
                        </div>
                        <button onClick={addTasks} 
                            className='bg-black rounded-lg text-white px-5 py-2'>+ Add New Tasks</button>
                    </div>

                <div>
                    {tasks.map((tasks,index) => (
                        <TaskCard key={index} {...tasks}></TaskCard>
                    ))}
                </div>

            </div>
        </>
    )
}

function TaskCard({title,description,priority_tags,date,work_tag}){
    return(
        <>
            <div>
                {/* Header */}
                <div>
                    <input type="checkbox" />
                    <h1>{title}</h1>
                </div>
                
                {/* Description */}
                <div>
                    <h1>{description}</h1>
                </div>

                {/* Tags */}
                <div>
                    <div>{priority_tags}</div>
                </div>

                {/* Footer*/}
                <div>
                    <div>
                        <h1>{date}</h1>
                        <div>{work_tag}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
