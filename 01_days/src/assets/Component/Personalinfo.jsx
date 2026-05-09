function Personalinfo() {
    const name = "Alex Johnson";
    const role = "Frontend Developer";
    const location = "San Francisco, CA";
    const email = "alex@example.com";

    return (
        <div className="text-center px-6 pt-4 pb-2">
            <h2 className="text-3xl font-extrabold text-gray-800">{name}</h2>
            <p className="text-indigo-600 font-semibold text-lg">{role}</p>
            <p className="text-gray-500 text-sm mt-1">{location}</p>
            <p className="text-gray-400 text-sm italic">{email}</p>
        </div>
    )
}
export default Personalinfo;