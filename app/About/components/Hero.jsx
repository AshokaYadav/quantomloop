export default function Hero() {
    return (
      <section className="relative h-screen flex items-center justify-center text-center px-5 bg-fixed  bg-center" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/0a/f7/74/0af7741991985e2b530c8f62135c3eea.jpg')" }}>
        
        {/* <div className="absolute inset-0 bg-opacity-50 z-0">hellldfjlsd</div> */}
        
        <div className="z-10 max-w-4xl animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Who We Are
          </h1>
          <p className="text-xl mb-8">
          At WasimTech, we blend creativity with technology to deliver world-class digital solutions.
          </p>
          <a href="#services" className="inline-block px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors">
          Discover More
          </a>
        </div>
      </section>
    );
  }