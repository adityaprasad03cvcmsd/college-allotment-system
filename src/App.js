// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Table } from './components/table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path=""  element={<Table/>}></Route>
      </Routes>
      {/* <Table/> */}
    </div>
  );
}

export default App;
