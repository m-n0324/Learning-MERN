 import photo from "./assets/mansiImg.png"
 const Header =()=>{
  return (
    <header className=" text-3xl   text-white  rounded -xl bg-blue-600  p-5 flex  justify-between items-center" >
      <div>
        <div className="text-3xl font-bold ">Mansi nigam</div>
        <div className="text-xl ">  Full Stack Developer</div>    
      </div>
       <img className="rounded-full w-24" src={photo} /> 
    </header>
  )

 }
 export default Header;