import './App.css'
import { Footer, Header } from './components/common'
import { MyText } from './features/labs/MyText'
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

      <MyText></MyText>
      <MyText>easy frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText><span>easy</span></MyText>
      <MyText><span>easy</span> frontend</MyText>
      <MyText>
        <span>easy</span>
        <span>frontend</span>
      </MyText>

    </>
  )
}

export default App
