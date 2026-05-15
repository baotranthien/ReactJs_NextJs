import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl flex relative max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="hidden md:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=800" 
            alt="Login" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-500/20 mix-blend-multiply" />
        </div>

        <div className="w-full md:w-1/2 p-10 overflow-y-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-playfair mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Please enter your details to sign in.</p>
          </div>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
              Continue with Facebook
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" className="w-5 h-5" alt="Apple" />
              Continue with Apple
            </button>
          </div>

          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-shadow"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-shadow"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex justify-between items-center text-sm mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-primary-500 font-medium hover:underline">Forgot password?</a>
            </div>

            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-bold mt-6 transition-colors">
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-6 text-sm text-gray-500">
            Don't have an account? <a href="#" className="text-primary-500 font-bold hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
