
function Productcard({
  name,
  description,
  image, // renamed from img to match data
  price,
  isOnSale = false,
  salePrice
}) {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 flex flex-col h-full text-left cursor-pointer group">
      {/* Image Placeholder */}
      <div className="w-full h-56 bg-gray-100 rounded-2xl mb-8 overflow-hidden flex items-center justify-center border border-gray-50">
        {image && image !== "dfsnkjsd" ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-300 flex flex-col items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-widest uppercase opacity-40">No Image</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">{name}</h3>
          {isOnSale && (
            <span className="bg-[#FF5C5C] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
              Sale
            </span>
          )}
        </div>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow font-medium opacity-80">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">${isOnSale ? salePrice : price}</span>
            {isOnSale && (
              <span className="text-sm text-gray-400 line-through font-medium">${price}</span>
            )}
          </div>

          <button 
            onClick={() => alert("Added " + name + " to cart!")}
            className="border-2 border-gray-200 rounded-lg px-5 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcard;