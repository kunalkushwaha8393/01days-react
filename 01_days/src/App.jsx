import Section from "./components/Section";
import Productcard from "./Productcard/Productcard";
import { products } from "./data";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header sabse upar */}
      <Header />
      
      {/* 2. Baaki ka saara content niche */}
      <div className="flex-grow bg-gradient-to-br from-[#8A8AE2] via-[#7B7BE8] to-[#5C5CD6] flex flex-col items-center overflow-x-hidden">
        <header className="pt-20 pb-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
            Product Showcase
          </h1>
          <div className="inline-block bg-white/20 px-6 py-2 rounded-full backdrop-blur-md border border-white/30 shadow-inner">
            <p className="text-white text-lg font-bold tracking-wide">
              Discover our amazing products
            </p>
          </div>
        </header>

        <main className="w-full">
          <Section>
            {products.map((product) => (
              <Productcard key={product.id} {...product} />
            ))}
          </Section>
        </main>

        <footer className="mt-auto py-10 text-white/40 text-sm font-medium w-full text-center">
          © 2025 Product Showcase. Built with React & Tailwind.
        </footer>
      </div>
    </div>
  );
}

export default App;