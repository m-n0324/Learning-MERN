// const SocialMedia = ({icon,title,url})=>{ return <a href={url}> {icon} {title}</a>;

// }
// export default SocialMedia;
// const SocialMedia = ({ icon, title, url }) => {
//   return <a href={url}> {icon} {title}</a>;
// };
// export default SocialMedia;
const SocialMedia = ({ icon, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-600 hover:underline"
    >
      <span className="text-xl">{icon}</span>
      <span>{title}</span>
    </a>
  );
};

export default SocialMedia;
