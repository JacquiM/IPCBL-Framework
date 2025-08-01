export default function Hero() {
  return (
    <section className="academic-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6">
            Integrated Project & Context-Based Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            A Comprehensive Framework for ICT Education
          </p>
          <div className="flex flex-col md:flex-row items-stretch justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm min-h-[80px] flex flex-col justify-center">
              <p className="text-sm opacity-90">Research by</p>
              <p className="font-semibold">J. Muller & JJ Greeff</p>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm min-h-[80px] flex flex-col justify-center">
              <p className="text-sm opacity-90">Participating Institutions</p>
              <p className="font-semibold">Belgium Campus & North-West University</p>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm min-h-[80px] flex flex-col justify-center">
              <p className="text-sm opacity-90">Presented at</p>
              <p className="font-semibold">SACLA 2025 Conference</p>
              <p className="text-xs opacity-75">Bloemfontein, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
