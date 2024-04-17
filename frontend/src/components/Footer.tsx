const Footer = () => {
  return (
    <div className="bg-orange-400 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Eats.com
        </span>
        <span className="text-xl text-white font-bold flex-col flex tracking-tight">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
