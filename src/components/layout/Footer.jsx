const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t mt-10">
      <div className="container mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm text-white">
          © 2026 My App. All rights reserved.
        </p>

        {/* Right Links */}
        <div className="flex gap-6 text-sm text-white">
          <a href="#" className="hover:text-black transition">
            Privacy
          </a>
          <a href="#" className="hover:text-black transition">
            Terms
          </a>
          <a href="#" className="hover:text-black transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;