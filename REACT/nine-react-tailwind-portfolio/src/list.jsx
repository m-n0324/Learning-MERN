const List =({items})=>{
  return <ul className=" list-disc ml-5 list-inside text-grey-700">
    {items.map(item=> <li key={item}>{item}</li>)}
  </ul>


}
export default List;