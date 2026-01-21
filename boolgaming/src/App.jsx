import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/homepage"
import Singlegame from "./pages/singlegame"
import Defaultlayout from "./layouts/Defaultlayout"
import About from "./pages/about"
import NotFound from "./pages/notfound"

//test
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Defaultlayout />}>
          <Route index element={<Homepage />} />
          <Route path="/singlegame/:id" element={<Singlegame />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
