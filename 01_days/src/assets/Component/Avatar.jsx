function Avatar() {
    return (
        <div className="flex justify-center -mt-5 relative">
            <div className="w-32 h-32 rounded-full border-4 border-indigo-400 bg-gray-200 overflow-hidden flex items-center justify-center">
                {/* Placeholder for Image as requested - user will add image themselves */}
                <div className="text-gray-400 text-xs text-center px-2 font-medium">Add Image Here</div>
            </div>
        </div>
    );
}

export default Avatar;