import  Button  from './button';
const TodoItem  =({ id, todotext,tododate})=>{
  const deleteHandler =()=>{
    console.log(`trying to delete ${id} ${todotext}`)

  }
  

  return <div className="container text-center">
    <div className="row kg-row">
      <div className="col-5 text-truncate"> {todotext}</div>
      <div className="col-4"> {tododate}</div>
      <div className="col-3">
        <Button btntype='danger' btntext="Delete" handler={deleteHandler} />
      </div>
    </div>
  </div>

}
export default TodoItem;