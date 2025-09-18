import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Apps from './pages/Apps';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hitokoto, setHitokoto] = useState({ text: '生命如意志永存，青春永远年轻。', author: '安妮七旬', from: '安妮七旬' });

  // 获取一言
  useEffect(() => {
    const fetchHitokoto = async () => {
      try {
        const response = await fetch('https://v1.hitokoto.cn/');
        const data = await response.json();
        setHitokoto({ text: data.hitokoto, author: data.from || '未知', from: data.from || '未知' });
      } catch (error) {
        setHitokoto({ text: '生命如意志永存，青春永远年轻。', author: '安妮七旬', from: '安妮七旬' });
      }
    };
    fetchHitokoto();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <main>
          <Routes>
            <Route path="/" element={<Home hitokoto={hitokoto} />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </main>
      )}
    </Router>
  );
}

export default App;