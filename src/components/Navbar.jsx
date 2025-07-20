
const Navbar = () => {
  return (
    <nav className="z-100 fixed w-screen h-[10vh] bg-white/60 backdrop-blur-md py-3 px-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between w-full px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain mr-3" />
        </div>
        {/* Navigation Links & Button */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-[#111111] hover:text-blue-200 transition-colors font-medium">Products</a>
          <a href="#about" className="text-[#111111] hover:text-blue-200 transition-colors font-medium">About</a>
          <a href="#products" className="text-[#111111] hover:text-blue-200 transition-colors font-medium">AI Solutions</a>
          <a href="#blog" className="text-[#111111] hover:text-blue-200 transition-colors font-medium">Testimonials</a>
          <a href="#ai" className="text-[#111111] hover:text-blue-200 transition-colors font-medium">Blog</a>
          <button className="ml-4 bg-[#0065d8bf] text-white font-semibold px-5 py-2 rounded-[8px] shadow hover:bg-blue-100 transition-colors">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
