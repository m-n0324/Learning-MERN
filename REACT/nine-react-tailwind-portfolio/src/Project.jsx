const Project = ({ title, desc, techUsed }) => {
  return (
    <div className="bg-gray-100 text-white p-4 rounded-xl shadow mb-4">
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-500 mb-2">{desc}</p>
      <div className="flex flex-wrap gap-2 text-black">
        {techUsed.map((tech, index) => (
          <span key={index} className="bg-gray-300 text-xs px-2 py-1 rounded-xl">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
