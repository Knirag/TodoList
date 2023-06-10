import './App.css'; // Import the 'App.css' file for styling
import TodoList from './components/TodoList';  // Import the TodoList component from the TodoList file
function App() {
  //Function App meant to contain app components
  return (
    <div>
      <TodoList/>
      {/*TodoList component for managing todos*/}
    </div>
  );
}

export default App; /* Exports the App component as the default export of this module, making it available for other parts of the application to import and use. */


