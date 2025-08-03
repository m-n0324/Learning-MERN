// import  Contact  from "lucide-react"
// import Hobbies from "./hobbies";

// import Education from "./education";
// import Skills from "./skills";
// import AboutMe from "./aboutMe";
// import Header from "./header";

// function App() {
  

//   return (
//     <>
//     <div className="bg-gray-100 px-5 py-8">
//       <div className=" bg-white max-w-4xl mx-auto rounded-xl  shadow-lg" >
//         <Header></Header>
//        
//         <Project></Project>  
//         <Hobbies></Hobbies> 
//         <Contact></Contact>
//         <Education></Education>
//         <Skills></Skills>

        
       
//       </div>
      
//     </div></>
    
//   );
// }

// export default App;
import Header from "./header"
import AboutMe from "./aboutMe"
import Project from "./projects";
import Skills from "./skills";
import Education from "./education";
import './index.css'; // in main.jsx
import  Contact  from "./contact";
import Hobbies from "./hobbies";
import Extracocurricular from "./extracocurricular";
function App (){
  return (
    <>
    <div className="bg-gray-100 px-5 py-8">
       <div className=" bg-white max-w-4xl mx-auto rounded-xl  shadow-lg" >
        <Header></Header>
        <AboutMe></AboutMe>
        <Project></Project>
        <Skills></Skills>
        <Education></Education>
        <Hobbies></Hobbies>
        <Extracocurricular></Extracocurricular>
        <Contact></Contact>


       </div>
    </div>
    </>

  );
}
export default App;
