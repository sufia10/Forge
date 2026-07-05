import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';

function App(){
  return(
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;