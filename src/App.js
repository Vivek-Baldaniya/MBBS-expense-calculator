import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DomainSelection from "./Components/DomainSelection";
import DisplayExpense from "./Components/DisplayExpense";

function App() {
  return (
    <div className="App">
      <div className="mainTitle">Welcome, To MBBS Expense Calculator</div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DomainSelection />} />
          <Route exact path="/displayExpense" element={<DisplayExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
