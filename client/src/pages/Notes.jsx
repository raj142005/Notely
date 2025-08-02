import { useState } from "react";

function Notes(){
    const [notes,setNotes] = useState([]);
    const [notetext,setNotetext] = useState("");

    const addNote = () => {
        if(notetext.trim() =="") return;

        const lines = notetext.split("\n");

        const newNote = {
            id:Date.now(),
            title:lines[0] || "Untitled",
            description:lines.slice(1).join(" ") || "No Content",
            date:new Date().toLocaleDateString(),
        };

        setNotes([...notes , newNote]);
        setNotetext("");
    }

    return(
        <>
            <div className='text-center max-w-5xl mx-auto px-4'>

                <div className='flex flex-col text-center mb-5'>
                    <h1 className='text-5xl font-bold m-3 p-4'>Notes</h1>
                    <h1 className='text-xl'>Capture your thoughts, organize your ideas, and keep everything accessible in one <br/> beautiful space.</h1>
                </div>

                <div className='mt-10 text-left'>
                    <h2 className='text-2xl font-semibold mb-4'>Create New Note</h2>
                    <div className='bg-white rounded-2xl p-6 shadow'>
                
                        <textarea className='w-full h-40 p-2  border-gray-300 focus:outline-none resize-none rounded-xl'
                            placeholder="Start writing your note here.... The first line becomes the title"
                            value={notetext}
                            onChange={(e)=>setNotetext(e.target.value)}>
                        </textarea>
                        <div className='border-t pt-4 flex flex-row items-center justify-between mt-4'>
                            <div className='text-gray-400 text-m'>✏️ Rich text formatting coming soon</div>
                            <button onClick={addNote}
                                className='mt-4 px-5 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-transform hover:scale-105'>
                                + Add Note
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-10 text-left'>
                    <div className='flex flex-row items-center justify-between'>
                        <h1 className='text-2xl font-semibold mb-4'>Your Notes</h1>
                        <input
                            type="search"
                            id="note-search"
                            placeholder="Search Notes"
                            className="px-2 py-2 bg-gray-200 text-gray-1900 text-m border w-72 focus:outline-none rounded-lg ps-2">
                        </input>
                    </div>


                    <div className='mt-10 grid grid-cols-3 gap-4  '>
                        {notes.length === 0 ? (
                            <p className='text-black'>No Notes yet</p>
                        ):(
                            notes.map((note)=>(
                                <NoteDisplayCard
                                    key={note.id}
                                    title={note.title}
                                    description={note.description}
                                    date={note.date}
                                />
                            ))
                        )}
                    </div>
                </div>


            </div>
        </>
    );
}

 function NoteDisplayCard({title, description , date }){
    return(
        <>
            <div className='flex flex-col w-full h-72 p-4 rounded-lg cursor-pointer shadow-md bg-red-100 hover:scale-105 transition-transform'>
                <h2 className='text-lg font-bold mb-2'>{title}</h2>
                <p className='text-black text-sm overflow-hidden flex-grow line-clamp-5'>{description}</p>
                <p className='text-xs text-black mt-2'>{date}</p>
            </div>
        </>
    )
}

export default Notes;