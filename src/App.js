import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [randomArr, setRandomArr] = useState([]);
  const [filter, setFilter] = useState([1]);

  useEffect(() => {
    let arrS = [];
    for (let i = 0; i < 169; i++) {
      arrS.push(Math.round(Math.random() * 200 - 100));
    }
    setRandomArr(arrS);
  }, []);

  return (
    <div>
      <div className="header">Draw Table</div>
      <div className="App">
        {randomArr.map((value) => {
          return (
            <>
              {value <= 0 ? (
                <div
                  className={
                    filter === 2 ? "numbers numbersfiltered" : "numbers"
                  }
                  style={{
                    backgroundColor: `rgba(191, 11,27,${(value * -1) / 100})`
                  }}
                >
                  {value}
                </div>
              ) : (
                <div
                  className={
                    filter === 3 ? "numbers numbersfiltered" : "numbers"
                  }
                  style={{
                    backgroundColor: `rgba(65, 188, 156,${value / 100})`
                  }}
                >
                  {value}
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className="footer">
        <button className="button a" onClick={() => setFilter(2)}>
          {"Filter>0"}
        </button>
        <button className="button" onClick={() => setFilter(1)}>
          All
        </button>
        <button className="button b" onClick={() => setFilter(3)}>
          {"Filter<0"}
        </button>
      </div>
    </div>
  );
}
