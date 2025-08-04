const Landing = () => {
  return (
    <div className="pt-20 bg-black text-white font-sans w-full overflow-x-hidden">
      {/* Hero */}
    <section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black py-32 overflow-hidden">
    {/* Floating blobs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 opacity-20 blur-2xl rounded-full animate-float"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1
        data-aos="fade-up"
        className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-glow"
        >
        Discover. Swap. Save.
        </h1>
        <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8"
        >
        SweepSwap is your smart way to buy, sell, and swap with verified users around you.
        </p>
        <a
        data-aos="zoom-in"
        data-aos-delay="400"
        href="/register"
        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300 glow-button"
        >
        Get Started Now
        </a>
    </div>
    </section>


      {/* Features */}
      <section id="features" className="w-full py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Why Choose SweepSwap?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Location-Aware Deals",
                desc: "See listings closest to you first. Never miss a great deal nearby."
              },
              {
                icon: "💬",
                title: "Instant Messaging",
                desc: "Chat securely with other users directly from the platform."
              },
              {
                icon: "💳",
                title: "Trusted Payments",
                desc: "Secure checkout with verified payment gateways."
              }
            ].map((item, i) => (
                <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl hover:shadow-xl hover:scale-105 transition"
                >

                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="w-full py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                step: "1",
                title: "Create Your Account",
                desc: "Sign up in seconds and set your preferred location."
              },
              {
                step: "2",
                title: "Explore Listings",
                desc: "Browse products nearby and filter by category or distance."
              },
              {
                step: "3",
                title: "Swap or Buy",
                desc: "Message the seller and checkout with confidence."
              }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-6xl font-bold text-purple-400 mb-4">{item.step}</h3>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="w-full bg-gradient-to-r from-purple-700 to-cyan-500 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
            <h2
            data-aos="zoom-in-up"
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
            >
            Ready to join the future of local shopping?
            </h2>

          <a
            href="/register"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 shadow-lg transition"
          >
            Create Your Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} SweepSwap. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
