import List from "./list"

function App() {
  // let studentArr;
  const studentArr =["mansi","yuvraj","palak","muskan" , "sejal","manas","mummy","papa","mama"];
  // const studentArr =[];

  
 return <>
  <h1 className="text-3xl text-blue-800"> Creating student list with map</h1>
  <List list={studentArr}></List>
 </>
}

export default App
