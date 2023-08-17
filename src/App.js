import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage, {loader as HomeLoader} from './pages/HomePage';


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <HomePage />, loader: HomeLoader}
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
