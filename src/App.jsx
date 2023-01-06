/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Burger } from './components/Burger';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { News } from './components/News';
import { Subscription } from './components/Subscription';
import { Footer } from './components/Footer';

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isDark, setDark] = useState(false);

  const handleSetDark = () => {
    setDark((state) => !state);
  };

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isModal]);


  return (
    <body>
      <div className="max-w-[1760px] last:m-auto last:mt-6 mt-6 px-6">
        <Header isDark={isDark} setIsModal={setIsModal} handleSetDark={handleSetDark} />
        <Burger
          isActive={isModal}
          setIsModal={setIsModal}
          isDark={isDark}
          handleSetDark={handleSetDark}
        />
        <Main />
        <News />
        <Subscription />
      </div>
      <Footer />
    </body>
  );
}

export default App;
