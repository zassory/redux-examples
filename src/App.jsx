
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement , incrementby } from './store/slices/counter';

import './App.css'

function App() {

  const { counter } = useSelector( state=> state.counter );
  const dispatch = useDispatch();
  

  return (
    <div className="App">      
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementby(2) )}>

        </button>
        <p>
          count is: { counter }
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
