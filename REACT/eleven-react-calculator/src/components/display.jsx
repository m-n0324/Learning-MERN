const Display = ({text}) =>{
 return (
  <>
   <div style={{ 
      border: "1px solid black", 
      padding: "10px", 
      fontSize: "24px", 
      minHeight: "40px",
      marginBottom: "10px"
    }}>
      {text}
    </div>

  </>
 )
}
export default Display;