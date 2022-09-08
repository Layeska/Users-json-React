import Users from './components/Users'
import './App.css'

function App() {

  return (
    <div className='App'>
      <h1 className='titleApp'>User Random <br/><span> By Ana Juárez</span></h1>
      
      <div className='container-gb-square'>
        <div className='square1 square'></div>
        <div className='square2 square'></div>
        <div className='square3 square'></div>
      </div>
      <Users/>
    </div>
  )
}

export default App
