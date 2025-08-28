import {FaTasks , FaBell , FaClipboardList , FaUsers , FaStickyNote } from "react-icons/fa"
import { Link } from "react-router-dom"

function MainContent(){
    return (
        <div className='h-screen'>
            <div className='flex flex-col text-center m-10'>
                <span className='text-6xl font-extrabold mb-4'>Welcome to <a className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Notely</a></span>
                <span className='break-all p-3 text-xl'>Your intelligent collaborative workspace where ideas flourish, 
                    tasks get done, and teams stay <br/>connected. 
                    Experience seamless productivity with elegant simplicity.</span>
            </div>

            <div className=' flex flex-col text-center my-16'>
                <h2 className='text-3xl font-bold mb-14'>Quick Access</h2>

                <div className='grid grid-cols-5  place-items-center'>
                
                     <QucikAccessCard 
                        icon={<FaStickyNote/>}
                        title={"Notes"}
                        description={"Create, Organize and Collabrate on your notes"}
                        bgColor={"bg-blue-200"}
                        to="/notes"
                    />
                     <QucikAccessCard 
                        icon={<FaTasks/>}
                        title={"Tasks"}
                        description={"Manage and track your tasks and projects"}
                        bgColor={"bg-blue-200"}
                        to="/tasks"
                    />
                     <QucikAccessCard 
                        icon={<FaBell/>}
                        title={"Reminders"}
                        description={"Setup notifications and never miss important deadlines"}
                        bgColor={"bg-blue-200"}
                        to="/reminders"
                    />
                </div>
            </div>

        </div>
    )
}

function QucikAccessCard({icon,title,description,bgColor,to="/"}){
    return(
        <>
            <Link to = {to}>
                <div className={`flex flex-col w-48 h-64  items-center p-3 rounded-xl hover:scale-105 transition-transform 
                    shadow-md cursor-pointer ${bgColor}`}> 
                    <div className='mb-4 text-3xl'>{icon}</div>
                    <h2 className='text-lg font-semibold mb-2 text-center'>{title}</h2>
                    <p className='text-sm text-center text-gray-700'>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default MainContent