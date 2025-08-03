 import { User} from 'lucide-react';
 import Section  from './section';
 
 const AboutMe =()=>{
  return <div className='mt-5'>
    <Section icon={< User/>} sectionTitle ="About Me" > 
  <p> Hello! I’m Mansi Nigam, a passionate and detail-oriented Information Technology student currently in my 2nd year of B.Tech. I’m deeply interested in web development, UI/UX design, and solving real-world problems through technology.

Over the past year, I’ve worked on several projects using technologies like HTML, CSS, JavaScript, React, Node.js, and Tailwind CSS. I'm also exploring MERN stack development and have started learning Data Structures and Algorithms to strengthen my problem-solving skills for upcoming placements.

I enjoy building modern, responsive websites and experimenting with new tools. My focus is on writing clean, maintainable code and continuously learning to improve both frontend and backend skills.</p> </Section>
  </div>

 }
 export default AboutMe;