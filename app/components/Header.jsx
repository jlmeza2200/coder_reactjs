const Header = ({ image, title1, title2, title3 }) => {
  return (
    <>
      <div className="w-full z-0">
        <img
          src={image}
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
          alt="Header Image"
        />
      </div>
      <div className="w-full sm:w-2/4 md:w-80 py-3 px-5 -mt-64 z-10 ml-0 md:ml-32 absolute bg-black bg-opacity-40">
        <span className="text-red-400">{title1}</span>
        <h1 className="text-white text-4xl py-3">{title2}</h1>
        <span className="font-bold text-red-400">{title3}</span>
      </div>
    </>
  );
};

export default Header;
