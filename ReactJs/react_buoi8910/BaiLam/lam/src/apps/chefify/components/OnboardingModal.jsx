const OnboardingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2rem] w-full max-w-[520px] p-6 shadow-2xl relative">
        <div className="mb-6 px-2">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
            alt="Discover Chefify" 
            className="w-full h-[300px] object-cover rounded-2xl shadow-sm"
          />
        </div>
        
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-bold font-playfair mb-3">Discover Chefify</h2>
          <p className="text-gray-500 font-manrope text-sm leading-relaxed">
            Join our community of food lovers. Find the best recipes, share your own, and learn from top chefs around the world.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-[#F44B87] hover:bg-[#d20d52] text-white py-4 rounded-xl font-bold transition-colors">
            Next
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-transparent text-[#F44B87] hover:bg-primary-50 py-4 rounded-xl font-bold transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
