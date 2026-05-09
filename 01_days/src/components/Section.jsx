
function Section({ title, children }) {
  return (
    <section className="py-8 px-6 max-w-7xl mx-auto w-full">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-blue-100 opacity-80">Discover our amazing products</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {children}
      </div>
    </section>
  );
}

export default Section;
