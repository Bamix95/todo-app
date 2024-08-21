import { createBrowserRouter } from "react-router-dom";
import Todo from "./pages/Todo/todo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Todo></Todo>,
  },
]);

export { routes };
