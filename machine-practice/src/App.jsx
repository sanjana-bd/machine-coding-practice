import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {
            routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          }
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
