import React from "react";
import Loader from "react-loader-spinner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className=""> React Spinner</h1>
        <div className="container">
          <div className="row">
            <div className="col spinner_item p-5" title="Puff">
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5" title="Audio">
              <Loader type="Audio" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5"  title="BallTriangle">
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5" title="Bars">
              <Loader type="Bars" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
          <div className="row" title="Circles">
            <div className="col spinner_item p-5">
              <Loader type="Circles" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5" title="Grid">
              <Loader type="Grid" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5" title="Hearts">
              <Loader type="Hearts" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5" title="Oval">
              <Loader type="Oval" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
          <div className="row" title="Rings">
            <div className="col spinner_item p-5">
              <Loader type="Rings" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5" title="TailSpin">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5" title="ThreeDots">
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5" title="Watch">
              <Loader type="Watch" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
          <div className="row">
            <div className="col spinner_item p-5" title="RevolvingDot">
              <Loader
                type="RevolvingDot"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5" title="Triangle">
              <Loader
                type="Triangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5" title="MutatingDots">
              <Loader
                type="MutatingDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div
              className="col spinner_item p-5"
              style={{ border: "none" }}
            ></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
