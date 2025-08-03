import Graduation from './graduation';
import Section  from './section';
import {BookOpen } from 'lucide-react';
const Education = ()=>{
  return <Section icon={<BookOpen/>} sectionTitle ="Education" > 
  <Graduation title="Bachlor of Science in Information technology" school="Samrat Ashok Technological Institute of science and technology" year=" 2023-2027" />
  <Graduation title="Full Stack Web Development Bootcamp" school="Code Academy" year=" 2024" />
   </Section>;

}
export default Education;