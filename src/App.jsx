import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout"
import InstagramTemplate from "./sections/InstagramTemplate"
import Watermark from "./sections/Watermark"
import InstagramTemplateOffice from "./sections/InstagramTemplateOffice";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<InstagramTemplate/>} path="/"/>
            <Route element={<InstagramTemplateOffice/>} path="/oficina"/>
            <Route element={<Watermark/>} path="/watermark"/>
          </Routes>
        </Layout>
    </BrowserRouter>
    </>
  )
}

export default App