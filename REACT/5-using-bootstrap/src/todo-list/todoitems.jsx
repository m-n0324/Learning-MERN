
import TodoItem from "./todoItem";

const TodoItems = ()=>{
  const todoItems= [
    { id:1,todotext:"buy milk",tododate:"4-sept-2025"},
    { id:2,todotext:"Do skin care",tododate:"5-sept-2025"},
    { id:3,todotext:"wash cloths",tododate:"4-sept-2025"},
  ];
  return (
    <>
    {todoItems.map((item)=>(<TodoItem key = {item.id} id={item.id} todotext={item.todotext} tododate={ item.tododate} />
     ))}
 
    </>
  );

};
export default TodoItems;