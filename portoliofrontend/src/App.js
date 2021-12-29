import './App.css';
import { BrowseRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={}/>
        <Route path="/:project_id" element={}/>
      </Routes>
    </BrowseRouter>
  );
}

export default App;
