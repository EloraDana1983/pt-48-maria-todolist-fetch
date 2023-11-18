
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <>
    <div className="card-list">
      
      <div className='add-task'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
        
      </div>

      
    </div>
    
  </>
  );
}

export default App;
