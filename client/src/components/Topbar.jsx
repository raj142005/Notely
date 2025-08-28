function Topbar(){
    return (
        <div className=' flex justify-between items-center h-[8vh] px-10'>

            <div className='border p-2 ml-5 text-2xl font-bold flex flex-col items-start'>

                <span className='text-center leading-none'>Notely</span>
                <span className='text-sm text-gray-700 leading-none'>Collabrative Workspace</span>

            </div>

            <div className='p-2 border mr-10 text-xl flex flex-col items-start'>
                <span className='text-center font-medium leading-none'>Hello</span>
                <span className='text-sm text-gray-700 leading-none'>This is Email</span>
            </div>
        </div>
        
    )
}



export default Topbar