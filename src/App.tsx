import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard } from './features/labs/Student'
import { Student } from './models'

function App() {

  const john: Student = {
    name: 'john',
    age: 3,
  }

  const handleStudentClick = (student: Student) => {
    console.log('Student clicked', student)
  }

  return (
    <>
      <Header></Header>
      <StudentCard student={john} onClick={handleStudentClick} />
      <Footer></Footer>
    </>
  )
}

export default App
