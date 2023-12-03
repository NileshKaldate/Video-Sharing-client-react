import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesList } from "./routes/routesList";

function App() {
  const router = createBrowserRouter(routesList);

  return <RouterProvider router={router} />;
}

export default App;
