import "./App.css";
import Header from "./pages/Header";
import MainList from "./pages/MainList";

import season1Data from "./assets/season1.json";
import season2Data from "./assets/season2.json";

function App() {
  return (
    <>
      <Header />
      <div className="mainListWrap">
        {season2Data.map((elem) => {
          return <MainList elem={elem} key={elem.Brand} />;
        })}
      </div>
    </>
  );
}

export default App;
