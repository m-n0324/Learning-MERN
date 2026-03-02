const List = ({ list }) => {
  // if(!list || list.length === 0){
  //    return <>
  //    <h2 className="text-red-800"> no student is passed to display</h2>;
  //    </>
  // }

  return (
    <>
      {!list || list.length === 0 ? (
        <h2 className="text-red-800"> no student is passed to display</h2>
      ) : (
        <h2 className="text-red-800"> here is the list of students</h2>
      )}

      {list &&
        list.length >0 && 
          <ol class="list-decimal ml-10 mt-5 text-2xl">
            {list.map((item) => (
              <li> {item} </li>
            ))}
          </ol>
        }

      {/* 
  <ol class="list-decimal ml-10 mt-5 text-2xl">
    {[<li>Mansi </li>,<li>yuvraj</li>,<li> palak </li>,<li> muskan </li>,<li> sejal </li>]}
</ol> */}

      {/* <ol class="list-decimal ml-10 mt-5 text-2xl">
  <li>Mansi </li>
   <li>yuvraj</li>
  <li> palak </li>
   <li> muskan </li>
    <li> sejal </li>

</ol> */}
    </>
  );
};
export default List;
