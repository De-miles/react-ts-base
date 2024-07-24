import './App.css'
import { Widget } from './components/common'
import { MainLayout } from './components/Layout'
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
      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>

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

      <div>
        <div><Widget title='Earning Overview'>Chart 1</Widget></div>
        <div><Widget title='Revenue Sources'>Chart 2</Widget></div>
        <div><Widget title='Earning Overview'>Chart 3</Widget></div>
        <div><Widget title='Earning Overview'>Chart 4</Widget></div>
      </div>

    </>
  )
}

export default App
