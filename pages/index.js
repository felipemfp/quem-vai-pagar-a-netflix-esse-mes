import React from "react";
import Head from "next/head";

const FpAvatar = "/static/avatars/fp.png";
const FbAvatar = "/static/avatars/fb.png";
const BeAvatar = "/static/avatars/be.png";

const payers = {
  fp: { name: "Felipe", avatar: FpAvatar },
  fb: { name: "Francisco", avatar: FbAvatar },
  be: { name: "Beatriz", avatar: BeAvatar }
};

const monthsToPay = ["fb", "fp", "be", "fp"];

const Item = ({ currentMonth, month }) => {
  const payer = payers[monthsToPay[month % monthsToPay.length]];

  return (
    <div className={month === currentMonth ? "App-item-current" : "App-item"}>
      {payer.name}
    </div>
  );
};

const Home = () => {
  const currentMonth = new Date().getMonth();
  const currentPayer = payers[monthsToPay[currentMonth % monthsToPay.length]];

  return (
    <>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }

        .App {
          text-align: center;
        }

        .App-logo {
          height: 80px;
        }

        .App-header {
          background-color: #222;
          min-height: 150px;
          padding: 20px;
          color: white;
        }

        .App-title {
          font-size: 1.5em;
        }

        .App-item {
          font-size: 1.1em;
          margin: 0.5em 0;
          color: gray;
        }

        .App-item-current {
          font-size: 2em;
        }
      `}</style>

      <Head>
        <title>Quem vai pagar a Netflix esse mês? {currentPayer.name}!</title>
        <meta
          name="description"
          content={`Achou que não ia ter que pagar? Achou errado, otário!`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quem vai pagar a Netflix esse mês?</h1>
          <img src={currentPayer.avatar} className="App-logo" alt="logo" />
        </header>
        <div>
          {Array.apply(null, { length: 12 }).map((_, month) => (
            <Item currentMonth={currentMonth} month={month} key={month} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
