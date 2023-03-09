const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="bg-c-tertiary  h-8 text-c-white flex items-center justify-center">
      <p className="text-xs text-white">
        © {getYear} <span className="font-bold">R.D.</span>{" "}
        <span className="font-extralight tracking-widest text-[.5rem]">
          ANGELES
        </span>
      </p>
    </div>
  );
};

export default Footer;
