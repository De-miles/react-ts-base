import './App.css'
import { Footer, Header } from './components/common'
import { Student } from './features/labs/Student'

function App() {

  function abc() { }

  return (
    <>
      <Header></Header>
      <Student
        name='truong'
        age={18}
        isHero
        hobbyList={['eat', 'code', 'sleep']}
        sayHello={abc} />
      <Footer></Footer>
    </>
  )
}

export default App
