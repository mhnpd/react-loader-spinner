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
            <div className="col spinner_item p-5">
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5">
              <Loader type="Audio" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5">
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5">
              <Loader type="Bars" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
          <div className="row">
            <div className="col spinner_item p-5">
              <Loader type="Circles" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5">
              <Loader type="Grid" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5">
              <Loader type="Hearts" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5">
              <Loader type="Oval" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
          <div className="row">
            <div className="col spinner_item p-5">
              <Loader type="Rings" color="#00BFFF" height={100} width={100} />
            </div>
            <div className="col spinner_item p-5">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5">
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5">
              <Loader type="Watch" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
          <div className="row">
            <div className="col spinner_item p-5">
              <Loader
                type="RevolvingDot"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5">
              <Loader
                type="Triangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
            <div className="col spinner_item p-5">
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
