import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import PageNotFound from "../screens/PageNotFound";
import Loader from "../screens/Loader";

export default function AppRouter() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Loader/>} />
            <Route path="/:lang" element={<Home/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    )
}