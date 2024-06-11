import './App.css';
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Footer/>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
