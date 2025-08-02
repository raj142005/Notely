import  Layout  from './Layout.jsx'
import MainContent from './components/MainContent.jsx'
import Notes from './pages/Notes.jsx'
import Reminders from './pages/Reminders.jsx'
import Tasks from './pages/Tasks.jsx'
import Team from './pages/Teams.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Layout/>} >
              <Route index element={<MainContent/>} />
                  <Route path='notes' element={<Notes />}/>
                  <Route path='reminders' element={<Reminders />}/>
                  <Route path='tasks' element={<Tasks />}/>
                  <Route path='teams' element={<Team />}/>
              </Route>
      </Routes>
    </Router>
  )
}


export default App
