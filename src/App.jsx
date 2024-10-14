import { Navigate, Route, BrowserRouter as Router, Routes,useLocation } from "react-router-dom"
import { ButtonContextProvider } from "./ButtonContext"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import LayoutMainDiv from "./LayoutMainDiv"
import ReactGA from 'react-ga4';
import { useEffect } from "react"


function usePageTracking(){
  const location = useLocation();
  useEffect(()=> {
    ReactGA.send({hitType:'pageview' , page: location.pathname})
  } , [location])
}


function App() {


  useEffect(()=>{
    ReactGA.initialize('G-N0LRLPFK9Q');
  },[]);

  
  //jab bhi koi location change hoga to ek pageview bheja jayega iske through.
  return (
<ButtonContextProvider>
      <Router>
        <PageTracker/>
        <Header/>
          <Routes>
           <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/*" element={<LayoutMainDiv/>} />
        </Routes>
        <Footer />
      </Router>
    </ButtonContextProvider>
  )
}

function PageTracker(){
  usePageTracking();
  return null;
}

export default App