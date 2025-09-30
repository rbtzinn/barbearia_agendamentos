import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import BarberSetup from './pages/BarberSetup';
import ScheduleConfig from './pages/ScheduleConfig';
import ShareLink from './pages/ShareLink';
import BarberDashboard from './pages/BarberDashboard';
import ClientBrowse from './pages/ClientBrowse';
import ClientBook from './pages/ClientBook';
import ShopPublic from './pages/ShopPublic';
import Header from './components/Header';
import { useAuthStore } from './stores/auth';
import ClientBookings from './pages/ClientBookings';
import BarberProfile from './pages/BarberProfile';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = useAuthStore((s) => s.user);
  return user ? children : <Navigate to="/auth" replace />;
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/client/bookings" element={<ClientBookings />} />
        <Route path="/client" element={<ClientBrowse />} />
        <Route path="/book/:shopId" element={<ClientBook />} />
        <Route
          path="/barber/setup"
          element={
            <PrivateRoute>
              <BarberSetup />
            </PrivateRoute>
          }
        />
        <Route
          path="/barber/schedule"
          element={
            <PrivateRoute>
              <ScheduleConfig />
            </PrivateRoute>
          }
        />
        <Route
          path="/barber/share"
          element={
            <PrivateRoute>
              <ShareLink />
            </PrivateRoute>
          }
        />
        <Route
          path="/barber/profile"
          element={
            <PrivateRoute>
              <BarberProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/barber/dashboard"
          element={
            <PrivateRoute>
              <BarberDashboard />
            </PrivateRoute>
          }
        />

        {/* link público */}
        <Route path="/s/:slug" element={<ShopPublic />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
