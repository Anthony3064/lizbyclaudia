import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Test from './routes/Test';
library.add(faBars, faTimes);
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/lizbyclaudia' element={<Home />} />
        <Route path='/lizbyclaudia/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
