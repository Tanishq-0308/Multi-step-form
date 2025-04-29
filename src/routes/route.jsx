import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Page1 from "../componentss/pages/Page1";
import App from "../App";
import Page2 from "../componentss/pages/Page2";
import Page3 from "../componentss/pages/Page3";
import Page4 from "../componentss/pages/Page4";
import ConfirmPage from "../componentss/pages/ConfirmPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Page1/>} />
            <Route path="/step-2" element={<Page2/>} />
            <Route path="/step-3" element={<Page3/>} />
            <Route path="/step-4" element={<Page4/>} />
            <Route path="/submitted" element={<ConfirmPage/>} />
        </Route>
    )
)