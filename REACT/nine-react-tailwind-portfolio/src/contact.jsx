import Section  from './section';
import { Globe} from 'lucide-react';
import { Linkdin } from 'lucide-react';
const Contact= ()=>{
  return <div className='mb-6'>
    <Section icon={<Globe/>} sectionTitle ="Contact" > 
  <p className='text-xl text-gray-600 mb-4'>
    Email:mansi@gmail.com <br></br>
    Phone: 9698757474
  </p>
  <a href='#'><Linkdin /> Linkdin</a>

   </Section>
  </div>


}
export default Contact;