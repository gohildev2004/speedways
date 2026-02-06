import tyreImage from '../assets/Tyre.png'

// Use Cloudinary CDN for video
const introVideo = 'https://res.cloudinary.com/dwggftlyi/video/upload/v1770345490/speedways_intro-2_t8ugls.mp4'

const products = [
  {
    title: 'Agricultural Tyres',
    description: 'Radial + bias tyres for tractors, harvesters, and implements.',
  },
  {
    title: 'Industrial / OTR Tyres',
    description: 'Earthmover, skid steer, forklift, and port tyres.',
  },
  {
    title: 'Truck & Military Tyres',
    description: 'High load index tyres for highways and off-road operations.',
  },
  {
    title: 'ATV / Turf Tyres',
    description: 'Low-compaction tread patterns for utility vehicles.',
  },
  {
    title: 'Two / Three Wheeler Tyres',
    description: 'Urban and performance tyres with high-grip compounds.',
  },
  {
    title: 'Butyl Tubes',
    description: 'Precision-engineered tubes and flaps for total safety.',
  },
]

const featuredProducts = [
  {
    name: 'GRIPKING R-1W',
    category: 'Agricultural',
    spec: '480/65R-28 · 142 A8',
  },
  {
    name: 'POWERGRIP G-2',
    category: 'Industrial / OTR',
    spec: '17.5-25 · 16 PR',
  },
  {
    name: 'STEERKING HD+',
    category: 'Truck & Military',
    spec: '11.00R20 · 149/146 K',
  },
  {
    name: 'AT-999 MONSTER',
    category: 'ATV / Turf',
    spec: '25x10.00-12',
  },
]

function LandingPage() {
  return (
    <>
      <style>{`
        @keyframes float-circular {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(0, -20px);
          }
          75% {
            transform: translate(-10px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .float-circular {
          animation: float-circular 8s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen bg-neutral-950 text-white">
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 z-0 h-full w-full object-contain object-center md:object-cover"
              src={introVideo}
            />
            <div
              className="absolute inset-0 z-10"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            />
          </div>

          <header className="relative z-10 flex min-h-screen flex-col px-4 pb-16 pt-6 text-white sm:px-[6vw] sm:pb-20 sm:pt-14">
            <nav className="flex items-center justify-between gap-3 sm:gap-6">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm sm:tracking-[0.2em]">
                SpeedWays Tyres
              </div>
              <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                <a className="transition hover:text-white" href="#products">
                  Products
                </a>
                <a className="transition hover:text-white" href="#featured">
                  Featured
                </a>
                <a className="transition hover:text-white" href="#contact">
                  Contact
                </a>
              </div>
              <button className="rounded-full border border-white/60 bg-white/10 px-3 py-1.5 text-xs text-white transition hover:-translate-y-0.5 sm:px-5 sm:py-2 sm:text-sm">
                Download Catalogue
              </button>
            </nav>

            <div className="flex flex-1 items-center justify-center pt-12 sm:pt-16">
              <div className="max-w-3xl space-y-12 px-2 text-center sm:space-y-8">
                {/* Heading */}
                <h1
                  className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-6xl xl:text-7xl"
                  style={{
                    textShadow: '0 12px 40px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <span className="inline-block">SpeedWays Tyres.</span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Built for every terrain.
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="text-base leading-relaxed text-white/90 sm:text-lg md:text-xl md:leading-relaxed"
                  style={{ textShadow: '0 8px 24px rgba(0, 0, 0, 0.5)' }}
                >
                  We manufacture radial and bias tyres for agriculture, industrial
                  equipment, trucks, and two/three wheelers—engineered for
                  <span className="font-semibold text-white"> exceptional grip</span>,
                  <span className="font-semibold text-white"> durability</span>, and
                  <span className="font-semibold text-white"> long life</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4 sm:gap-4">
                  <button className="group relative w-full overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/40 sm:w-auto sm:px-8 sm:py-3.5">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Browse Tyres
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-neutral-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                  <button className="group w-full rounded-full border-2 border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/20 hover:shadow-xl hover:shadow-black/30 sm:w-auto sm:px-8 sm:py-3.5">
                    <span className="flex items-center justify-center gap-2">
                      Find a Tyre
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>

        <section id="featured" className="px-4 py-8 sm:px-[6vw] sm:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Featured
              </p>
              <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                New performance patterns now live
              </h2>
            </div>
            <button className="text-xs font-semibold text-white underline underline-offset-4 sm:text-sm">
              View all
            </button>
          </div>
          <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
            {featuredProducts.map((item) => (
              <article
                key={item.name}
                className="min-w-[230px] flex-1 rounded-2xl border border-neutral-800 bg-neutral-900 p-4"
              >
                <div className="relative p-6">
                  <img
                    alt={`${item.name} tyre`}
                    className="mx-auto h-36 w-auto"
                    src={tyreImage}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
                    New
                  </span>
                </div>
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                  <p className="text-xs text-neutral-400">{item.category}</p>
                  <p className="text-sm text-neutral-300">{item.spec}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="h-px bg-neutral-800"></div>

        <section id="products" className="px-4 py-12 sm:px-[6vw] sm:py-20">
          <div className="mx-auto max-w-4xl px-2 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Product Range
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Explore Tyre Categories
            </h2>
            <p className="mt-4 text-sm text-neutral-400 sm:text-base md:text-lg">
              Select a segment to explore sizes, rims, and tread patterns tailored to your needs.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-3">
            {products.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl bg-neutral-900/50 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900 sm:rounded-2xl sm:p-6 md:p-8"
              >
                <div className="mb-2 flex items-center justify-between sm:mb-3 md:mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-400 transition-colors group-hover:bg-neutral-700 group-hover:text-white sm:h-8 sm:w-8 md:h-10 md:w-10 md:text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <svg
                    className="h-3 w-3 text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-400 sm:h-4 sm:w-4 md:h-5 md:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold leading-tight text-white sm:text-base md:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-snug text-neutral-400 sm:mt-2 sm:text-xs sm:leading-relaxed md:mt-3 md:text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="h-px bg-neutral-800"></div>

        <section id="about" className="px-4 py-12 sm:px-[6vw] sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative flex min-h-[450px] items-center justify-center py-12 sm:min-h-[600px] sm:py-16">
              {/* Center Text Content */}
              <div className="relative z-10 max-w-2xl px-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Global Reach
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Shipped to 100+ Countries Worldwide
                </h2>
                <p className="mt-6 text-base text-neutral-400 sm:text-lg md:text-xl">
                  Trusted by distributors and businesses across six continents
                </p>
              </div>

              {/* Surrounding Country Flags - Smaller on mobile, larger on desktop */}
              <div className="absolute left-[2%] top-[15%]">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '10s', animationDelay: '0s' }}>
                  🇺🇸
                </div>
              </div>

              <div className="absolute right-[8%] top-[12%]">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '11s', animationDelay: '2s' }}>
                  🇬🇧
                </div>
              </div>

              <div className="absolute right-[3%] top-[48%] hidden md:block">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '13s', animationDelay: '3s' }}>
                  🇩🇪
                </div>
              </div>

              <div className="absolute bottom-[12%] right-[5%]">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '11.5s', animationDelay: '1s' }}>
                  🇦🇺
                </div>
              </div>

              <div className="absolute bottom-[3%] left-[45%]">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '10.5s', animationDelay: '4s' }}>
                  🇧🇷
                </div>
              </div>

              <div className="absolute bottom-[10%] left-[8%]">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '12.5s', animationDelay: '2.5s' }}>
                  🇯🇵
                </div>
              </div>

              <div className="absolute right-[45%] top-[2%]">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '11.2s', animationDelay: '1.5s' }}>
                  🇮🇳
                </div>
              </div>

              <div className="absolute left-[2%] top-[48%] hidden md:block">
                <div className="float-circular text-5xl transition-all hover:scale-110 md:text-6xl lg:text-8xl" style={{ animationDuration: '12.8s', animationDelay: '3.5s' }}>
                  🇨🇦
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-neutral-800"></div>

        <section id="about-us" className="px-4 py-12 sm:px-[6vw] sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                About Us
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                SPEEDWAYS TYRES
              </h2>
            </div>

            <div className="mt-8 space-y-4 px-2 text-center text-sm leading-relaxed text-neutral-300 sm:mt-12 sm:space-y-6 sm:text-base md:text-lg md:leading-relaxed">
              <p>
                <span className="font-semibold text-white">SPEEDWAYS TYRES</span> is a part of well known <span className="font-semibold text-white">"SPEEDWAYS GROUP"</span> of Companies in India. Established in <span className="font-semibold text-white">1984</span>, our presence today spans over <span className="font-semibold text-white">100 countries worldwide</span>. We are leading manufacturer of Farm Radial, Agriculture Industrial, OTR, Two / Three Wheeler Tyres, Tubes & Flaps. We also specialize in Pre-Cured & Conventional Tread Rubber.
              </p>

              <p>
                SPEEDWAYS TYRES located in the industrial town of <span className="font-semibold text-white">Jalandhar, Punjab</span> is having state-of-the-art manufacturing facility. The Tyres manufactured in this facility are supplied to major original equipment manufacturers (OEM's) in India, North America, Europe & Africa. We have been awarded the <span className="font-semibold text-white">"CAPEXIL Export Award"</span> for a record <span className="font-semibold text-white">eighth year in succession</span> in recognition of our outstanding performance in exports.
              </p>

              <p>
                Built on the foundation of <span className="font-semibold text-white">honesty, trust, lawful operation and scientific development</span>, we strive to deliver maximum value to our customers & stakeholders. Over the years, we have established a distinct culture in the company through various HR policies. With an emphasis on TQM, continuous efforts are being undertaken at our R&D centre to improve product quality, manufacturing & production systems. Our target has always been to <span className="font-semibold text-white">delight our customers with the best products and services</span>.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-neutral-800"></div>

        <section id="contact" className="px-4 pb-12 pt-8 sm:px-[6vw] sm:pb-20 sm:pt-10">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-neutral-900 p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-10 sm:text-left">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                Ready to source tyres?
              </h2>
              <p className="mt-3 text-sm text-neutral-400 sm:text-base">
                Contact SpeedWays Tyres for catalogue access and distributor
                opportunities.
              </p>
            </div>
            <button className="w-full rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 sm:w-auto">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-center text-xs text-neutral-500 sm:text-sm">
            write2us@speedwaystyres.com · +91 98156 50501
          </p>
        </section>

        <footer className="flex flex-col items-center justify-center gap-4 border-t border-neutral-800 px-4 py-6 text-center text-xs text-neutral-500 sm:flex-row sm:justify-between sm:px-[6vw] sm:py-8 sm:text-sm">
          <p>© SpeedWays Tyres. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <a href="#" className="transition hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="transition hover:text-neutral-400">Terms & Conditions</a>
            <a href="#" className="transition hover:text-neutral-400">Careers</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default LandingPage
