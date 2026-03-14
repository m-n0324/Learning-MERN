const Dynamic =() =>{
  const studentName ='mansi'
  let marks = [80,87,87,93,85];
  const Calpercentage=() =>{
    let sum = 0;
    for (let i = 0;i <marks.length; i++){
      sum+=marks[i];
    }
    return (sum/marks.length);
  }
 return<>
 <h6> {studentName} scored {Calpercentage()}%</h6>

  </> 
}
 export default Dynamic;