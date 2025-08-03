import css from "./Container.module.css";
                                                   
 const Container =(prosp)=>{
  return <div className= {css.container}> { prosp.children}</div>

 }
 export default Container;