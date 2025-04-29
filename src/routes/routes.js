// routes/routes.js
// 路由配置
import Home from "../pages/Home";
import Introduction from "../pages/Introduction";
import News from "../pages/News";
import Beverage from "../pages/Beverage";

const routes = [
  { path: "/", element: Home },
  { path: "/intro", element: Introduction }, // 本店介紹
  { path: "/news", element: News }, // 最新消息
  { path: "/beverage", element: Beverage }, // 飲品
  // 可繼續新增更多頁面
];

export default routes;
