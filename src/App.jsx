import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // 路由
import routes from "./routes/routes.js";
import "./main.sass"; // 樣式
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <Router>
        {/* 天 */}
        <HeaderComponent />

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>

        {/* 地 */}
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
