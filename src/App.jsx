import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ButtonContextProvider } from "./ButtonContext"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import LayoutMainDiv from "./LayoutMainDiv"


function App() {
  return (
<ButtonContextProvider>
      <Router>
        <Header />
          <Routes>
           <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/*" element={<LayoutMainDiv/>} />
        </Routes>
        <Footer />
      </Router>
    </ButtonContextProvider>
  )
}
export default App
