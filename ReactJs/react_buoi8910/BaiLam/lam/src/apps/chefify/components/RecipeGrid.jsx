import { Clock, Star, Bookmark } from 'lucide-react';
import { chefifyRecipes } from '../../../data/mockData';

const RecipeCard = ({ recipe, isBookmarked, toggleBookmark }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <button 
        onClick={() => toggleBookmark(recipe.id)}
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-primary-500 transition-colors shadow-sm"
      >
        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-primary-500 text-primary-500' : ''}`} />
      </button>
    </div>
    <div className="p-4">
      <span className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-2 block">{recipe.type}</span>
      <h3 className="text-lg font-bold font-playfair mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
        {recipe.title}
      </h3>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recipe.time}</span>
        <span className="flex items-center gap-1 text-accent-star"><Star className="w-4 h-4 fill-current" /> {recipe.rating}</span>
      </div>
    </div>
  </div>
);

const HorizontalScrollSection = ({ title, recipes, bookmarkedRecipes, toggleBookmark }) => (
  <div className="mb-12">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold font-playfair">{title}</h2>
      <button className="text-primary-500 font-medium text-sm hover:underline">View all</button>
    </div>
    <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x">
      {recipes.map(recipe => (
        <div key={recipe.id} className="min-w-[280px] md:min-w-[320px] snap-start">
          <RecipeCard recipe={recipe} isBookmarked={bookmarkedRecipes.has(recipe.id)} toggleBookmark={toggleBookmark} />
        </div>
      ))}
      {/* Duplicate for visual fullness if less than 4 */}
      {recipes.map(recipe => (
        <div key={`dup-${recipe.id}`} className="min-w-[280px] md:min-w-[320px] snap-start">
          <RecipeCard recipe={recipe} isBookmarked={bookmarkedRecipes.has(recipe.id)} toggleBookmark={toggleBookmark} />
        </div>
      ))}
    </div>
  </div>
);

const RecipeGrid = ({ searchQuery, filters, bookmarkedRecipes, toggleBookmark }) => {
  const filteredRecipes = chefifyRecipes.filter(recipe => {
    // 1. Search Query
    if (searchQuery && !recipe.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // 2. Filters -> Type
    if (filters.types.length > 0 && !filters.types.includes(recipe.type)) {
      return false;
    }
    // 3. Filters -> Rating
    if (filters.ratings.length > 0 && !filters.ratings.includes(Math.floor(recipe.rating))) {
      return false;
    }
    // 4. Filters -> Time
    const recipeTimeMinutes = parseInt(recipe.time);
    if (!isNaN(recipeTimeMinutes) && recipeTimeMinutes > filters.maxTime) {
      return false;
    }

    return true;
  });

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
      <HorizontalScrollSection title="This Summer Recipes" recipes={chefifyRecipes} bookmarkedRecipes={bookmarkedRecipes} toggleBookmark={toggleBookmark} />
      <HorizontalScrollSection title="Recipes With Videos" recipes={chefifyRecipes.slice().reverse()} bookmarkedRecipes={bookmarkedRecipes} toggleBookmark={toggleBookmark} />
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold font-playfair mb-6">All Recipes {filteredRecipes.length !== chefifyRecipes.length ? `(${filteredRecipes.length})` : ''}</h2>
        
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No recipes match your criteria. Try adjusting your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} isBookmarked={bookmarkedRecipes.has(recipe.id)} toggleBookmark={toggleBookmark} />
            ))}
            {/* Duplicates just to show grid layout filling, removing for filtering to make it obvious */}
            {filteredRecipes.length > 0 && filteredRecipes.length < 4 && filteredRecipes.map(recipe => (
              <RecipeCard key={`dup2-${recipe.id}`} recipe={recipe} isBookmarked={bookmarkedRecipes.has(recipe.id)} toggleBookmark={toggleBookmark} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeGrid;
