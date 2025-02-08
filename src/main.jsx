import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import Page from "./app/dashboard/page";
import Today from "./components/sections/Today";
import Upcoming from "./components/sections/Upcoming";
import Inbox from "./components/sections/Inbox";
import { ThemeProvider } from "./components/darkmode/theme-provider";
import { Children } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Page />}>
      <Route path="" element={<Navigate to="/todo" replace />} />
      <Route path="todo" element={<App />} />
      <Route path="today" element={<Today />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="inbox" element={<Inbox />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
