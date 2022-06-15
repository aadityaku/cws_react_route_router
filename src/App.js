import Apply from "./Components/Apply";
import Banner from "./Components/Banner";
import Course from "./Components/CourseCard";
import Fotter from "./Components/Fotter";
import Header from "./Components/header";
import Student from "./Components/StudentCard";
import course from "./data/course";
import student from "./data/student";
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
   <BrowserRouter>
   
    <Header/>
    <Routes>
     <Route path="/" element={
       <>
        <Banner/>
        <Course course={course}/>
        <Student student={student}/>
        </>
     }/>
      
     <Route path="/apply" element={<Apply/>}/>
      </Routes>
     <Fotter/>
     
     </BrowserRouter>
  )
}

export default App;
