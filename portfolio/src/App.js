import './css/App.css';
import Home from "./pages/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <main>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;