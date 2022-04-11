// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Table } from './components/table';
import { Result } from "./components/result";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Table />}></Route>
        <Route path="/result"  element={<Result/>}></Route>
      </Routes>
      {/* <Table/> */}
    </div>
  );
}

export default App;
