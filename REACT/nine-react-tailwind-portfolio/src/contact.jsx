import Section  from './section';
import { Globe} from 'lucide-react';
import { LinkedinIcon } from 'lucide-react';
import SocialMedia from './socialMedia';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
const Contact= ()=>{
  const socialLinks = [ {icon: <LinkedinIcon />,title:"Linkedin" ,url:"https://in.linkedin.com"},
    {icon: < Github/>,title:"Github" ,url:"https://github.com/"},
    {icon: <Twitter />,title:"Twitter" ,url:"https://x.com/?lang=en"}
  ]



  return (
  <div className='pb-6'>
    <Section icon={<Globe />} sectionTitle="Contact & social Media">
      <p className='text-gray-600 mb-4'>
        Email: mansi@gmail.com <br />
        Phone: 9698757474
      </p>
      {socialLinks.map (social => <SocialMedia
  icon={social.icon }
  title={social.title}
  url={social.url}
/> )}
      
    </Section>
  </div>
);



}
export default Contact;