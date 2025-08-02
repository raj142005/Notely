import { Outlet } from 'react-router-dom'
import Topbar from './components/Topbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { useState } from 'react'


function Layout(){

    const [collapsed , setcollapsed ] = useState(false);

    const sidebarwidth = collapsed ? 'w-16' : 'w-64';
    const marginleft = collapsed ? 'ml-16' : 'ml-64'

    return (
        <div className='h-screen bg-black '>
            <div className='h-[10vh] bg-blue-500 fixed top-0 w-full z-50'>
                <Topbar/>
            </div>
            <div className='flex flex-1 '>
                <div className={`bg-green-800  overflow-y-auto fixed top-[10vh] h-[90vh] left-0 ${sidebarwidth} transition-all duration-300`}>
                    <Sidebar collapsed = {collapsed} setcollapsed={setcollapsed}/>
                </div>
                <div className={`bg-yellow-400 flex-1 overflow-y-auto p-4 h-full pt-[10vh] ${marginleft} transition-all duration-300`}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout