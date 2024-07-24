import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard } from './features/labs/Student'
import { Student } from './models'

function App() {

  const john: Student = {
    name: 'john',
    age: 3,
  }

  return (
    <>
      <Header></Header>
      <StudentCard student={john} />
      <Footer></Footer>
    </>
  )
}

export default App
