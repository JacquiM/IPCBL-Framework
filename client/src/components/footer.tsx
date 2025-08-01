

export default function Footer() {
  const quickLinks = [
    { href: "#introduction", label: "Introduction" },
    { href: "#methodology", label: "Methodology" },
    { href: "#framework", label: "Framework" },
    { href: "#results", label: "Results" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-inter font-bold mb-4">IPCBL Framework</h3>
            <p className="text-gray-300 mb-4">
              Advancing ICT education through innovative pedagogical approaches and industry collaboration.
            </p>
            <div className="text-sm text-gray-400">
              <p>Belgium Campus & North-West University</p>
              <p>SACLA Research Publication 2025</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IPCBL Framework Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
