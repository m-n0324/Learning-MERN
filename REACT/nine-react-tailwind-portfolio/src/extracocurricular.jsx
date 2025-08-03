import Section  from './section';
import { Award} from 'lucide-react';
import List from './list';
const Extracocurricular = ()=>{
  const activity =["Volunteer at various local coding bootcapms  for underpriviledge youth","Organizer of city -wide hackathon","Member of univercity chess club","Active participation in various clubs of college"]

  return <Section icon={<Award/>} sectionTitle ="Extracocurricular" > 
  <List items={activity}/>
   </Section>;

}
export default Extracocurricular;
