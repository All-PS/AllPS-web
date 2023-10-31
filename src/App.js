import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage/mainPage";
import DetailPage from "pages/DetailPage/detailPage";

const searchOptions = [
  { label: "문제명", value: "problemName" },
  { label: "문제번호", value: "problemCode" },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage searchOptions={searchOptions} />} />
          <Route path="/search" element={<DetailPage searchOptions={searchOptions} />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
