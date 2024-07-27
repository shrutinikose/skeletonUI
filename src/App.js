import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header>
         <h1>React Skeletons UI</h1>
      </header>
      <div className='content' style={{ margin: '50px' }}>
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
