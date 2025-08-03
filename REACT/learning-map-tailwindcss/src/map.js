const todoArray=[
    {id:1,todotext:"wake up early",tododate:"2 aug"},
     {id:2,todotext:"go to school",tododate:"1 aug"},
      {id:3,todotext:"buy milk",tododate:"11 aug"}
  ];
  
  console.log("--------starting with map--------")
  const todoArraytext = todoArray.map(todoItem=>todoItem.todotext );
  console.log(todoArraytext);
  
  console.log("------ending  with map----");


// function convertObjectTotodotext( todoItem){
  //   console.log(`converted function was called with item ${JSON.stringify(todoItem)},converting this to ${todoItem.todotext}`);
  //   return todoItem.todotext;
  // } 


  // console.log("--------starting--------")
  // const todoArraytext =[];
  // todoArray.forEach(item =>{
  //   const str = convertObjectTotodotext(item);
  //   todoArraytext.push(str);
  // });
  // console.log(todoArraytext);
  // console.log("------ending----");
