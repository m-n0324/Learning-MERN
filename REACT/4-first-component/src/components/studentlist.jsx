const Studentlist =(props)=>{
  if (!props.students){
    return <p> no students given</p>
  }
 
  return <ol>
    {
      props.students.map((student,index) => <li key={student}>{student}</li>)
      
    }</ol>;

}
export default Studentlist;