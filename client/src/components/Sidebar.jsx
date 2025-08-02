import { FaStickyNote, FaFolder , FaBell , FaUsers, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


function Sidebar({collapsed , setcollapsed}){


    const items = [
        {icon:<FaFolder/> ,title:"Dashboard",subtitle:"Overview and Analytics",to:"/" },
        {icon:<FaStickyNote/> ,title:"Notes",subtitle:"Create and Manage Notes",to:"/notes" },
        {icon:<FaTasks/> ,title:"Tasks",subtitle:"Track Your Tasks",to:"/tasks" },
        {icon:<FaBell/> ,title:"Reminders",subtitle:"Set up Reminders",to:"/reminders" },
        {icon:<FaUsers/> ,title:"Teams",subtitle:"Collabrate with Team",to:"/teams" }
    ]

    const toggleCollapse = () => {
        setcollapsed(prev => !prev)
    }

    return(
        <div className={`flex flex-col p-2 h-full w-full duration-200  transition-all`} >  
            <div className='flex justify-end'>
                <button className='m-3 flex  cursor-pointer p-2 hover:bg-gray-500 rounded' onClick={toggleCollapse}>
                    {collapsed ? <SlArrowRight/> : <SlArrowLeft/>}
                </button>
            </div>
            <div className='flex flex-col '>
                {items.map((items,index) => (
                    <NavLink 
                        to={items.to}
                        key={index}
                        className={({ isActive })=> `${collapsed ? 'justify-center':'justify-start'} flex flex-row gap-3 p-3 cursor-pointer 
                        mb-4 rounded-lg items-center ${isActive ? 'bg-blue-400':'bg-gray-600'} hover:bg-blue-400`}>
                            <div className='text-xl'>{items.icon}</div>

                            {!collapsed && (
                                <div className='flex flex-col'>
                                    <div className='text-l font-semibold'>{items.title}</div>
                                    <div className='text-sm text-gray-700 '>{items.subtitle}</div>
                                </div>
                            )}
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default Sidebar;