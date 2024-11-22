import { Footer, Navbar } from "./components";
import { About, Contact, Donation, Events, EventsForm, Home, JoinUs, LoadingScreen, PageNotFound, SingleEvent, Success } from "./pages";
import "./styles/Global.css"
import "./styles/Media.css"
import { Routes, Route } from "react-router-dom";
import { ToastContextProvider } from "./context/ToastContext";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])



  return (
    <>
      <ToastContextProvider>
        {loading ? <LoadingScreen /> :
          <div className="App">
            <Navbar />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/event/:id" element={<SingleEvent />} />
              <Route path="/success" element={<Success />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events-form" element={<EventsForm />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        }
      </ToastContextProvider>
    </>
  );
}

export default App;
