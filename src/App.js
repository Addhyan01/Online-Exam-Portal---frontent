import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Exams from './pages/Exams';
import AttemptExam from './pages/AttemptExam';
import Certificate from './pages/Certificate';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registe" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/exams/:courseId" element={<Exams />} />
        <Route path="/attempt/:examId" element={<AttemptExam />} />
        <Route path="/certificate/:examId" element={<Certificate />} />
      </Routes>
    </Router>
  )
}

export default App;