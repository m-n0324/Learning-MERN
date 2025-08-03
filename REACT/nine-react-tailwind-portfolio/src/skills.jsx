import Section  from './section';
import { Code} from 'lucide-react';
import Pill from './pill';

const Skills = ()=>{
  const skillTitle = [ "Java","DSA","HTML","CSS","JavaScript","Bootstrap","Tailwindcss","Python","C","React","Express","MongoDB","NodeJs","SQL","Git","AWL","Docker"]
  return <Section icon={<Code/>} sectionTitle ="Skills" > 
  <div className='flex flex-wrap gap-2'>
    {skillTitle.map(title => <Pill  title={title}/>)}
  </div>
  </Section>

}

export default Skills;