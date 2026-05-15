import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import FilterSidebar from './components/FilterSidebar';
import OnboardingModal from './components/OnboardingModal';
import LoginModal from './components/LoginModal';

const ChefifyHome = ({ searchQuery, filters, setFilters, bookmarkedRecipes, toggleBookmark }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero bookmarkedRecipes={bookmarkedRecipes} toggleBookmark={toggleBookmark} />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-12 gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <RecipeGrid 
          searchQuery={searchQuery} 
          filters={filters} 
          bookmarkedRecipes={bookmarkedRecipes} 
          toggleBookmark={toggleBookmark} 
        />
      </div>
    </div>
  );
};

const ChefifyApp = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  // App State
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    types: [],
    maxTime: 120,
    ratings: []
  });
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState(new Set());

  const toggleBookmark = (id) => {
    setBookmarkedRecipes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    // Show onboarding on first load
    const timer = setTimeout(() => setShowOnboarding(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-manrope text-gray-900 bg-white min-h-screen">
      <Navbar onLoginClick={() => setShowLogin(true)} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Routes>
        <Route path="/" element={
          <ChefifyHome 
            searchQuery={searchQuery} 
            filters={filters} 
            setFilters={setFilters}
            bookmarkedRecipes={bookmarkedRecipes}
            toggleBookmark={toggleBookmark}
          />
        } />
      </Routes>

      <OnboardingModal isOpen={showOnboarding} onClose={() => setShowOnboarding(false)} />
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default ChefifyApp;

