import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="text-white text-xl">
      {dark ? <FiSun className="hover:text-yellow-400" /> : <FiMoon className="hover:text-purple-400" />}
    </button>
  );
};

export default DarkModeToggle;
