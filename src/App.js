import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage, {loader as HomeLoader} from './pages/HomePage';
import NewsPage, {loader as NewsLoader} from './pages/NewsPage'


function App() {
  const router = createBrowserRouter([
    {path: '/', element: <HomePage />, loader: HomeLoader, children: [
      {path: '/', element: <NewsPage />, loader: NewsLoader }
    ]},
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
