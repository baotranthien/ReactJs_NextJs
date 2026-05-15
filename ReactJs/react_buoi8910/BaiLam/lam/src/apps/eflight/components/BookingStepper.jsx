import { useState } from 'react';
import { Check, CreditCard, User, FileText, ChevronLeft } from 'lucide-react';

const StepIndicator = ({ currentStep, stepNumber, title, icon: Icon }) => {
  const isCompleted = currentStep > stepNumber;
  const isActive = currentStep === stepNumber;
  
  return (
    <div className={`flex flex-col items-center w-32 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
        isCompleted ? 'bg-green-500 text-white' : 
        isActive ? 'bg-secondary-500 text-white shadow-lg shadow-secondary-500/30' : 'bg-gray-200 text-gray-500'
      }`}>
        {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
      </div>
      <span className="text-xs font-bold uppercase tracking-wider">{title}</span>
    </div>
  );
};

const BookingStepper = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [passenger, setPassenger] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passport: ''
  });

  const isStep1Valid = passenger.firstName && passenger.lastName && passenger.email && passenger.passport;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <button onClick={onBack} className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to flights
      </button>

      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute top-5 left-16 right-16 h-[2px] bg-gray-200 -z-10">
          <div 
            className="h-full bg-secondary-500 transition-all duration-500"
            style={{ width: `${(step - 1) * 50}%` }}
          />
        </div>
        <StepIndicator currentStep={step} stepNumber={1} title="Details" icon={User} />
        <StepIndicator currentStep={step} stepNumber={2} title="Payment" icon={CreditCard} />
        <StepIndicator currentStep={step} stepNumber={3} title="Ticket" icon={FileText} />
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 min-h-[400px]">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold mb-6">Passenger Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    value={passenger.firstName}
                    onChange={e => setPassenger(p => ({ ...p, firstName: e.target.value }))}
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    value={passenger.lastName}
                    onChange={e => setPassenger(p => ({ ...p, lastName: e.target.value }))}
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={passenger.email}
                  onChange={e => setPassenger(p => ({ ...p, email: e.target.value }))}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
                <input 
                  type="text" 
                  value={passenger.passport}
                  onChange={e => setPassenger(p => ({ ...p, passport: e.target.value }))}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" 
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setStep(2)} 
                disabled={!isStep1Valid}
                className="bg-secondary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6 flex gap-4">
              <div className="flex-1 border bg-white border-secondary-500 rounded-lg p-3 text-center font-medium shadow-sm text-secondary-600 cursor-pointer">
                Credit Card
              </div>
              <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-500 cursor-pointer bg-white">
                PayPal
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input type="text" placeholder="123" className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-secondary-500 outline-none" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={() => setStep(1)} className="text-gray-500 font-medium px-4 py-3 hover:text-gray-900 transition-colors">
                Back
              </button>
              <button onClick={() => setStep(3)} className="bg-secondary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary-600 transition-colors flex items-center gap-2">
                Pay Securely
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center justify-center text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Your e-ticket has been sent to <span className="font-bold text-gray-900">{passenger.email || 'your email'}</span>. You can also download it right here.
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl w-full max-w-sm border border-gray-200 border-dashed relative">
              <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white rounded-full border-r border-gray-200"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full border-l border-gray-200"></div>
              <h3 className="font-bold text-lg mb-4">E-Ticket Summary</h3>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Booking Ref</span>
                <span className="font-bold">XYZ89Q</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Passenger</span>
                <span className="font-bold">{passenger.firstName} {passenger.lastName}</span>
              </div>
            </div>
            <button onClick={onBack} className="mt-8 text-secondary-500 font-bold hover:underline">
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingStepper;
