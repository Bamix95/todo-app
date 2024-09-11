import { createBrowserRouter } from "react-router-dom";
import Todo from "./pages/Todo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
  },
]);

export { routes };
