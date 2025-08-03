import { Children } from "react";

 
 const Section =({icon ,children ,sectionTitle})=>{
  return(<div className='mb-12 mx-5 '>
    <div  className=' flex my-3 items-center mb-3' >
     {icon}
     <h1 className='font-bold text-2xl mx-2'> {sectionTitle}</h1>
    </div>
    {children}

  </div>)

 }
 export default Section;