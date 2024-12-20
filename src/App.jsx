import './App.css'
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className='min-w-screen min-h-screen bg-gray-100  flex justify-center'>
        <div className='container p-5'>
          <div className='w-3/6 h-full bg-amber-100 w-100 mx-auto shadow'>
            <div className='justify-center'>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
