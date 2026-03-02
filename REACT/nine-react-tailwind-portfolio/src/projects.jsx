import Section from './section';
import { Briefcase } from 'lucide-react';
import Project from "./Project" // ✅ This refers to the individual card component

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Platform",
      desc: "A full-featured e-commerce web application with user authentication, product listings, shopping cart, and payment gateway integration.",
      techUsed: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Social Media Dashboard",
      desc: "A responsive dashboard to monitor and visualize social media metrics like followers, engagement rate, and recent activities across platforms using charts and cards.",
      techUsed: ["React", "Tailwind CSS", "Recharts"]
    }
  ];

  return (
    <Section icon={<Briefcase />} sectionTitle="Projects">
      {projectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          desc={project.desc}
          techUsed={project.techUsed}
        />
      ))}
    </Section>
  );
};

export default Projects;
