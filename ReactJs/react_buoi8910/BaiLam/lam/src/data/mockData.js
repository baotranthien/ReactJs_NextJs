export const chefifyRecipes = [
  {
    id: 1,
    title: 'Salad Caprese',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800',
    time: '15 mins',
    rating: 4.8,
    type: 'Healthy',
    isRecipeOfTheDay: true,
  },
  {
    id: 2,
    title: 'Summer Berry Bowl',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9f527d659c?auto=format&fit=crop&q=80&w=800',
    time: '10 mins',
    rating: 4.5,
    type: 'Sweet',
  },
  {
    id: 3,
    title: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800',
    time: '5 mins',
    rating: 4.9,
    type: 'Breakfast',
  },
  {
    id: 4,
    title: 'Grilled Salmon',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    time: '25 mins',
    rating: 4.7,
    type: 'Dinner',
  }
];

export const eflightFlights = [
  {
    id: 'FL-101',
    airline: 'SkyHigh Airlines',
    logo: '✈️',
    departure: { time: '08:00 AM', city: 'JFK, New York' },
    arrival: { time: '11:30 AM', city: 'LAX, Los Angeles' },
    duration: '6h 30m',
    price: 350,
  },
  {
    id: 'FL-202',
    airline: 'Oceanic Air',
    logo: '🌊',
    departure: { time: '02:15 PM', city: 'JFK, New York' },
    arrival: { time: '05:45 PM', city: 'LAX, Los Angeles' },
    duration: '6h 30m',
    price: 420,
  },
];

export const dashboardStats = {
  totalUsers: 14250,
  usersTrend: '+12%',
  revenue: 85400,
  revenueTrend: '+8%',
  activeBookings: 320,
  bookingsTrend: '-2%',
};

export const dashboardTransactions = [
  { id: 'TRX-001', user: 'Alice Smith', amount: 350, status: 'Completed', date: '2023-10-25' },
  { id: 'TRX-002', user: 'Bob Johnson', amount: 420, status: 'Pending', date: '2023-10-26' },
  { id: 'TRX-003', user: 'Charlie Brown', amount: 150, status: 'Failed', date: '2023-10-27' },
  { id: 'TRX-004', user: 'Diana Prince', amount: 800, status: 'Completed', date: '2023-10-28' },
  { id: 'TRX-005', user: 'Evan Wright', amount: 200, status: 'Completed', date: '2023-10-29' },
  { id: 'TRX-006', user: 'Fiona Gallagher', amount: 550, status: 'Completed', date: '2023-10-29' },
  { id: 'TRX-007', user: 'George Harris', amount: 120, status: 'Pending', date: '2023-10-30' },
  { id: 'TRX-008', user: 'Hannah Abbott', amount: 900, status: 'Completed', date: '2023-10-31' },
  { id: 'TRX-009', user: 'Ian Somerhalder', amount: 450, status: 'Failed', date: '2023-11-01' },
  { id: 'TRX-010', user: 'Julia Roberts', amount: 310, status: 'Completed', date: '2023-11-02' },
  { id: 'TRX-011', user: 'Kevin Hart', amount: 75, status: 'Completed', date: '2023-11-02' },
  { id: 'TRX-012', user: 'Liam Neeson', amount: 620, status: 'Pending', date: '2023-11-03' },
  { id: 'TRX-013', user: 'Mia Wallace', amount: 880, status: 'Completed', date: '2023-11-04' },
  { id: 'TRX-014', user: 'Noah Centineo', amount: 190, status: 'Completed', date: '2023-11-05' },
  { id: 'TRX-015', user: 'Olivia Wilde', amount: 530, status: 'Failed', date: '2023-11-06' },
];
