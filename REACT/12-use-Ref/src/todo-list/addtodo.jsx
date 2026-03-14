import Button from "./button";
function Addtodo(){
  const addHandler=()=>{
    console.log(`trying to add`)
  }
  const textChangeHandler = (activity) => {
    console.log(activity.target.value);


  }

  return  <div className="container ">
  <div className="row kg-row">
    <div className="col-5"> 
      <input type="text" className="form-control " placeholder="Enter todo here" onChange={textChangeHandler}
      aria-label="Username" aria-describedby="basic-addon1"></input></div>
    <div className="col-4">
      <input type="date" className="form-control "></input></div>
    <div className="col-3">
        <Button btntype='success' btntext="Save" handler={addHandler} />
     </div>
  </div>
</div>
}
export default Addtodo;