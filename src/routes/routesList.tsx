import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";

export const routesList = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
