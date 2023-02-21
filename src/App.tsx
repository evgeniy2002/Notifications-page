import React from 'react';
import { Comments } from './components/Comments';
import { Header } from './components/Header';

import './scss/App.scss';

function App() {
  const [readMark, setReadMark] = React.useState<boolean>(false);

  const handleMark = () => {
    setReadMark(true);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Header handleMark={handleMark} />

        <main className="content">
          <Comments readMark={readMark} />
        </main>
      </div>
    </div>
  );
}

export default App;
