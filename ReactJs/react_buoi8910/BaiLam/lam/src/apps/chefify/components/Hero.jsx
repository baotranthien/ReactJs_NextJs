import { Clock, Star, Bookmark } from 'lucide-react';
import { chefifyRecipes } from '../../../data/mockData';

const Hero = ({ bookmarkedRecipes, toggleBookmark }) => {
  const recipeOfTheDay = chefifyRecipes.find(r => r.isRecipeOfTheDay) || chefifyRecipes[0];
  const isBookmarked = bookmarkedRecipes?.has(recipeOfTheDay.id);

  return (
    <div className="relative h-[600px] w-full bg-gray-900 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="text-white max-w-xl z-10">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 leading-tight">
              Elevate Your Daily Cooking
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-manrope">
              Discover recipes, tips, and inspiration to create delicious meals every day.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl w-full max-w-sm z-10 transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative group">
              <span className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                Recipe of the day
              </span>
              <img 
                src={recipeOfTheDay.image} 
                alt={recipeOfTheDay.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-playfair">{recipeOfTheDay.title}</h3>
                  <button 
                    onClick={() => toggleBookmark(recipeOfTheDay.id)}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-primary-500 text-primary-500' : ''}`} />
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recipeOfTheDay.time}</span>
                  <span className="flex items-center gap-1 text-accent-star"><Star className="w-4 h-4 fill-current" /> {recipeOfTheDay.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
