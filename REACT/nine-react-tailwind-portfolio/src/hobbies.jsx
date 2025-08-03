import Section  from './section';
import { Heart} from 'lucide-react';
import List from './list';
const Hobbies = ()=>{
  const hobbies = ["Photgraphy","Reading","Hiking","Guitar"];
   return <Section icon={<Heart/>} sectionTitle ="Hobbies" > 
   <List  items={hobbies}/>
   </Section>;

}


export default Hobbies;