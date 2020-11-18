import React, {useEffect, useState} from 'react';
import Search from "./Components/Search";
import Display from "./Components/Display";


function App() {

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        console.log("selected updated");
    }, [selected])
  return (
    <div className="relative">

      <header>
          <h1>
              Kalorilaskuri
          </h1>
      </header>

        <div className="container">

            <div className="flex-nocenter">

                <div className="search-box">
                    <Search selected={selected} setSelected={setSelected}/>
                </div>

                <div className="info-box">
                    <Display selected={selected} setSelected={setSelected}/>
                </div>

            </div>

        </div>
    </div>
  );
}

export default App;
