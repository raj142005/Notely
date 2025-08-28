import { useState } from "react"

export default function Tasks(){

    const[tasks,setTasks] = useState([]);

    const[showForm , setShowForm] = useState(false);

    const[formData , setFormData] = useState({
        title : "",
        description : "",
        priority_tags : "",
        date : "",
        work_tag : "",
    });


 

    const handleInput = (e) => {
        const { name , value } = e.target;
        setFormData(prev => ({...prev , [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.title){
            alert("Title Task is Required");
            return;
        }

        const newTask = {...formData , id : Date.now};
        setTasks((prev) =>[...prev , newTask]);
        setFormData({
            title : "",
            description : "",
            priority_tags : "",
            date : "",
            work_tag : "",
        });
        setShowForm(false);
    }

    const handleCancel = () => {

        setFormData({
            title : "",
            description : "",
            priority_tags : "",
            date : "",
            work_tag : "",
        });

        setShowForm(false);
    }

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
                        <button onClick={() => setShowForm(true)} 
                            className='bg-black rounded-lg text-white px-5 py-2'>+ Add New Tasks</button>
                    </div>

                <div>
                    {tasks.map((tasks,index) => (
                        <TaskCard key={index} {...tasks}></TaskCard>
                    ))}
                </div>

                {showForm && (
                    <Form 
                        formData={formData}
                        handleInput={handleInput}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel}
                    />
                )}

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

function Form({formData , handleInput , handleSubmit , handleCancel}){
    return(
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black/50" onClick={handleCancel}></div>
                <div className="bg-white rounded-lg p-6 w-96 z-10">
                    <form onSubmit={handleSubmit}>
                        <h1>Task</h1>
                        <input name="title" value={formData.title} onChange={handleInput}/>
                        <h1>Task Description</h1>
                        <input name="description" value={formData.description} onChange={handleInput}/>
                        <h1>Select Priority</h1>
                        <label name="priority_tag"></label>
                        <select id="priority" value={formData.priority_tags} onChange={handleInput}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <button type="submit">+ Add</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}
