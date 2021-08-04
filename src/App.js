import './App.css';
import TodoList from './TodoList';
import {Link, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
		  <h1>Tasks App - React + Redux</h1>
		  <div className="headerLinks">
			  <p><Link to="/todos">See my Tasks!</Link></p>
			  <p><Link to="/todos/new">Add a task</Link></p>
		  </div>
		  <Route path="/todos" component={TodoList}/>
		  <Route exact path="/" render={()=> <Redirect to="/todos"/>}/>
    </div>
  );
}

export default App;
