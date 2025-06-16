import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import './global.css';
import Atom from './pages/Atom';
import { HomePage } from './pages/HomePage';
import Mike from './pages/Mike';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mike" element={<Mike />} />
        <Route path="/atom" element={<Atom />} />
      </Routes>
    </Layout>
  );
}

export default App;

/**
 * 1. Basic CSS:  ✅
 * 2. Basic React ✅
 * 3. Flexbox: ✅
 * 4. HOC concept => Higher Order Component
 * 4. React Hooks: useState, useEffect, useMemo, useCallback, ✅
 * 5. Custom Hooks ✅
 * 6. Context API ✅
 * 8. TypeScript: ⚠️
 **/
