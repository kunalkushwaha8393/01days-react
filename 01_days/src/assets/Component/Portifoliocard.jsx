import Header from "./Header";
import Avatar from "./Avatar";
import Personalinfo from "./Personalinfo";
import Bio from "./Bio";

function Portifoliocard() {
    return (
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <Header />
            <Avatar />
            <Personalinfo />
            <Bio />
        </div>
    );
}

export default Portifoliocard;