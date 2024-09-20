import { ButtonContextProvider } from "./ButtonContext"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import LayoutMainDiv from "./LayoutMainDiv"


function App() {
  return (
    <>
    <ButtonContextProvider>
      <Header/>
      <LayoutMainDiv/>
      <Footer/>
    </ButtonContextProvider>
    </>
  )
}
export default App
