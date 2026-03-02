import photo from "./assets/mansiImg.png";

const Header = () => {
  return (
    <header className="text-3xl text-white rounded-xl bg-black p-5 flex justify-between items-center">
      <div>
        <div className="text-3xl font-bold">Mansi Nigam</div>
        <div className="text-xl">Full Stack Developer</div>
      </div>
      <img className="rounded-full w-24" src={photo} alt="Mansi Nigam" />
    </header>
  );
};

export default Header;
