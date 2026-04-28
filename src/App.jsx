import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from './assets/logo.png';
import heroSilentBasketball from './assets/sb.png';
import productWeightedSilentBasketball from './assets/wsb.png';
import csb from './assets/CSB.png';
import pind from './assets/PIND.png';

const LOCAL_IMAGES = {
  logo,
  heroSilentBasketball,
  productWeightedSilentBasketball,
  csb,
  pind,
};

const Button = ({ children, className = '', variant, ...props }) => {
  const base = 'inline-flex items-center justify-center transition';
  const styles =
    variant === 'outline'
      ? 'border border-gray-300 bg-transparent text-[#121212] hover:bg-neutral-100'
      : 'bg-[#FF6A00] text-white hover:bg-[#E65C00]';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => <div className={className}>{children}</div>;

const ChevronLeftIcon = ({ className = '' }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = ({ className = '' }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = ({ className = '' }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MiniIcon = ({ children, className = '' }) => (
  <span
    className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FF6A00]/12 text-lg ${className}`}
    aria-hidden="true"
  >
    {children}
  </span>
);

const heroSlides = [
  {
    eyebrow: 'INDOOR SILENT PLAY',
    title: 'Silent Indoor Training',
    subtitle: 'Practice at home without disturbing family, neighbors, or quiet moments.',
    cta: 'Explore Indoor Basketball',
    image: LOCAL_IMAGES.heroSilentBasketball,
    icon: '⌂',
  },
  {
    eyebrow: 'OUTDOOR PERFORMANCE',
    title: 'Train Every Day',
    subtitle: 'From controlled home practice to real outdoor performance and daily training.',
    cta: 'Explore Outdoor Series',
    image:
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1920&q=85',
    icon: '☀',
  },
  {
    eyebrow: 'PLAY SYSTEM',
    title: 'More Than a Game',
    subtitle: 'Create reward cards, challenge cards, and family rules that evolve with players.',
    cta: 'Join the Play System',
    image:
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1920&q=85',
    icon: '★',
  },
];

const products = [
  {
    tag: 'NEW',
    name: 'Weighted Silent Basketball',
    desc: 'Real weight. Quiet bounce. Indoor safe.',
    image: LOCAL_IMAGES.productWeightedSilentBasketball,
    badge: 'Indoor',
  },
  {
    tag: 'COMING SOON',
    name: 'Outdoor Training Basketball',
    desc: 'Built for daily training and real-court performance.',
    image: LOCAL_IMAGES.csb,
    badge: 'Outdoor',
  },
  {
    tag: 'PLAY LAB',
    name: 'Reward & Challenge Cards',
    desc: 'Turn practice into a family game system.',
    image: LOCAL_IMAGES.pind,
    badge: 'Game',
  },
  {
    tag: 'PREVIEW',
    name: 'Golf Training Series',
    desc: 'Future products for backyard and beginner training.',
    image:
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=900&q=85',
    badge: 'Golf',
  },
  {
    tag: 'PREVIEW',
    name: 'Baseball Training Series',
    desc: 'Family-friendly training tools for young athletes.',
    image:
      'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=900&q=85',
    badge: 'Baseball',
  },
];

function getNextIndex(currentIndex, direction, total) {
  if (!Number.isInteger(total) || total <= 0) return 0;
  return (currentIndex + direction + total) % total;
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const current = heroSlides[index] || heroSlides[0];

  useEffect(() => {
    if (heroSlides.length <= 1) return undefined;

    const timer = setInterval(() => {
      setIndex(prev => getNextIndex(prev, 1, heroSlides.length));
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const go = direction => {
    setIndex(prev => getNextIndex(prev, direction, heroSlides.length));
  };

  return (
    <section className="relative h-[620px] overflow-hidden rounded-b-[2rem] bg-black md:h-[720px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-5 pb-16 md:px-8 md:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.title}-content`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.45 }}
            className="max-w-none text-white"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] backdrop-blur-md">
              <span className="text-base" aria-hidden="true">
                {current.icon}
              </span>
              {current.eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:whitespace-nowrap md:text-6xl">
              {current.title}
            </h1>
            <p className="mt-5 max-w-[500px] text-base leading-7 text-white/85 md:text-lg">
              {current.subtitle}
            </p>
            <div className="mt-8">
              <a
                href="https://www.amazon.com/stores/Ealacritas/page/25942527-0F1F-4842-B539-76CB68BB7BCA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#FF6A00] text-white text-base font-semibold hover:bg-[#E65C00] transition"
              >
                View Product on Amazon
                <ArrowRightIcon className="ml-2" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go(-1)}
        className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 md:flex"
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCarousel() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.22em] text-[#FF6A00]">NEW ARRIVALS</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#121212] md:text-5xl">
              Scene-based product stories
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Use real-life scenes to introduce each product line — indoor quiet play, outdoor
              training, and future sports expansion.
            </p>
          </div>
          <Button variant="outline" className="h-11 rounded-xl px-5 font-semibold">
            View All Products
            <ArrowRightIcon className="ml-2" />
          </Button>
        </div>

        <div className="flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map(product => (
            <Card
              key={product.name}
              className="min-w-[280px] snap-start overflow-hidden rounded-3xl border border-neutral-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:min-w-[360px]"
            >
              <div className="relative h-[320px] overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-4 transition duration-500 hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#FF6A00] px-3 py-1 text-xs font-bold tracking-wide text-white">
                  {product.tag}
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {product.badge}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#121212]">{product.name}</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-neutral-600">
                  {product.desc}
                </p>
                <div className="mt-5 flex gap-3">
                  <Button className="flex-1 rounded-xl bg-[#121212] text-white hover:bg-black">
                    Learn More
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl border-neutral-300">
                    Amazon
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  const benefits = [
    ['✓', 'Priority support'],
    ['✉', 'Product updates'],
    ['✦', 'Exclusive offers'],
  ];

  return (
    <section className="bg-[#FFF6EA] py-20">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 md:grid-cols-[1fr_0.9fr] md:px-8">
        <div className="rounded-[2rem] bg-[#121212] p-8 text-white md:p-12">
          <p className="mb-4 text-sm font-bold tracking-[0.22em] text-[#FFB36B]">
            EXTENDED SUPPORT
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Activate support. Stay connected.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
            Register your product to receive support assistance, product updates, and selected
            exclusive offers from Ealacritas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {benefits.map(([icon, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <MiniIcon className="mb-3 bg-[#FF6A00]/20 text-[#FF6A00]">{icon}</MiniIcon>
                <p className="text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-[2rem] border-0 shadow-xl">
          <CardContent className="p-7 md:p-9">
            <h3 className="text-2xl font-bold text-[#121212]">Register Your Product</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Only email, order ID, and product type are required.
            </p>
            <form className="mt-6 space-y-4">
              <input
                className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none focus:border-[#FF6A00]"
                placeholder="Email *"
                type="email"
              />
              <input
                className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none focus:border-[#FF6A00]"
                placeholder="Order ID *"
              />
              <select className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none focus:border-[#FF6A00]">
                <option>Weighted Silent Basketball</option>
                <option>Outdoor Basketball</option>
                <option>Play Card System</option>
                <option>Other Product</option>
              </select>
              <input
                className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none focus:border-[#FF6A00]"
                placeholder="Name optional"
              />
              <textarea
                className="min-h-[96px] w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-[#FF6A00]"
                placeholder="Message optional"
              />
              <label className="flex gap-3 text-xs leading-5 text-neutral-600">
                <input type="checkbox" className="mt-1" />I agree to the Privacy Policy and allow
                Ealacritas to contact me regarding product support and updates.
              </label>
              <Button className="h-12 w-full rounded-xl text-base font-semibold">
                Activate Support
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function PlayLabSection() {
  const features = [
    ['🏆', 'Selected contributors may receive card packs'],
    ['★', 'Featured ideas may include creator recognition'],
    ['🎮', 'Reward, challenge, and event card ideas'],
    ['🏀', 'Built around family sports play'],
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-3 text-sm font-bold tracking-[0.22em] text-[#FF6A00]">
            EALACRITAS PLAY LAB™
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#121212] md:text-5xl">
            Design your own reward or challenge card.
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-600">
            Submit your idea and become part of the Ealacritas Play System. Selected designs may be
            included in future product updates.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {features.map(([icon, label]) => (
              <div key={label} className="rounded-2xl bg-[#FFF6EA] p-4">
                <MiniIcon className="mb-3">{icon}</MiniIcon>
                <p className="text-sm font-semibold leading-5 text-[#121212]">{label}</p>
              </div>
            ))}
          </div>
          <Button className="mt-8 h-12 rounded-xl bg-[#121212] px-6 text-white hover:bg-black">
            Design Your Card
            <ArrowRightIcon className="ml-2" />
          </Button>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#121212] p-8 text-white">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FF6A00]/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 mb-5 rounded-3xl bg-white p-6 text-[#121212] shadow-2xl rotate-[-4deg]"
          >
            <div className="mb-4 inline-flex rounded-full bg-[#FF6A00] px-3 py-1 text-xs font-bold text-white">
              REWARD CARD
            </div>
            <h3 className="text-2xl font-bold">Second Shot</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Make one extra shot before your next move.
            </p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="relative z-10 ml-auto rounded-3xl bg-[#FF6A00] p-6 text-white shadow-2xl rotate-[5deg] md:w-[82%]"
          >
            <div className="mb-4 inline-flex rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white">
              CHALLENGE CARD
            </div>
            <h3 className="text-2xl font-bold">One-Hand Shot</h3>
            <p className="mt-3 text-sm leading-6 text-white/85">
              Try a one-hand shot. Make it to move forward.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="bg-[#121212] py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.22em] text-[#FFB36B]">
            ABOUT EALACRITAS
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Family sports products designed for everyday play.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            From quiet indoor basketball to outdoor training and future golf and baseball products,
            Ealacritas builds sports experiences for families, beginners, and growing athletes.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['Designed for Home', 'Safe, quiet, and easy to enjoy indoors.'],
            ['Built for Play', 'Products that make practice feel fun and natural.'],
            ['Made to Evolve', 'A play system shaped by real customer feedback.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EalacritasBrandSite() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#121212]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-3 text-white">
            <img
              src={LOCAL_IMAGES.logo}
              alt="Ealacritas Logo"
              className="h-10 w-10 rounded-full bg-white object-contain p-1"
            />

            <span className="text-lg font-bold tracking-wide">Ealacritas</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
            <a href="#products" className="hover:text-white">
              Products
            </a>
            <a href="#support" className="hover:text-white">
              Support
            </a>
            <a href="#playlab" className="hover:text-white">
              Play Lab
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </nav>
          <Button className="h-10 rounded-xl px-4 text-white">Register</Button>
        </div>
      </header>

      <main>
        <HeroCarousel />
        <div id="products">
          <ProductCarousel />
        </div>
        <div id="support">
          <SupportSection />
        </div>
        <div id="playlab">
          <PlayLabSection />
        </div>
        <div id="about">
          <BrandStory />
        </div>
      </main>

      <footer className="bg-black py-10 text-white/70">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-5 px-5 text-sm md:flex-row md:px-8">
          <p>© 2026 Ealacritas. All rights reserved.</p>
          <p>Support: ealacritas@163.com</p>
        </div>
      </footer>
    </div>
  );
}
