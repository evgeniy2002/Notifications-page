import React from 'react';
import { Comments } from './components/Comments';
import { Header } from './components/Header';

import './scss/App.scss';

function App() {
  const [readMark, setReadMark] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(3);
  const handleMark = () => {
    setReadMark(true);
    setCount(0);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Header handleMark={handleMark} count={count} />

        <main className="content">
          <Comments readMark={readMark} />
        </main>
      </div>
    </div>
  );
}

export default App;
