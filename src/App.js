import React from 'react';
import './App.css';

import FpAvatar from './avatars/fp.png';
import FbAvatar from './avatars/fb.png';
import BeAvatar from './avatars/be.png';

const payers = {
  'fp': { name: 'Felipe', avatar: FpAvatar },
  'fb': { name: 'Francisco', avatar: FbAvatar },
  'be': { name: 'Beatriz', avatar: BeAvatar }
};

const monthsToPay = ['fb', 'fp', 'be', 'fp', 'fb', 'fp', 'be', 'fp', 'fb', 'fp', 'be', 'fp'];

const Item = ({currentMonth, month}) => {
  const payer = payers[monthsToPay[month]];

  return (
    <div className={month === currentMonth ? 'App-item-current' : 'App-item'}>
      {payer.name}
    </div>
  );
}

const App = () => {
  const currentMonth = new Date().getMonth();
  const currentPayer = payers[monthsToPay[currentMonth]];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Quem vai pagar a Netflix esse mês?</h1>
        <img src={currentPayer.avatar} className="App-logo" alt="logo" />
      </header>
      <div>
        {monthsToPay.map((payerId, month) => 
          <Item 
            currentMonth={currentMonth} 
            month={month}
            key={month}
          />
        )}
      </div>
    </div>
  );
}

export default App;
