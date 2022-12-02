import "../styles/App.css";
import React from "react";
var currArray;
  currArray = [
    "AED",
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "EUR",
    "GBP",
    "INR",
    "USD",
  ];
class App extends React.Component {
  async convertCurr() {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "yG7W6B1B0sF6bAc107ywMEJPwqSUne4K");
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${this.state.to}&from=${this.state.from}&amount=${this.state.curr}`,
      { method: "GET", redirect: "follow", headers: myHeaders }
    );
  }
  render() {
    return (
      <div className="App">
        <div className="card container w-50 p-4">
          <h1 className="text-center mb-5">Currency Converter</h1>
          <div
            className="row mb-3"
            style={{ justifyContent: "space-between" }}
          >
            <div className="col">
              <label htmlFor="from">From</label>
              <select
                className="form-select"
                name="from"
                id="from-selector"
              >
                <option value="INR" key={1}>
                  INR
                </option>
                <option value="AED" key={1}>
                  AED
                </option>
              </select>
              
            </div>
            <div className="col">
              <label htmlFor="to">To</label>
              <select
                className="form-select"
                name="to"
                id="to-selector"
              >
                <option value="INR" key={1}>
                  INR
                </option>
                <option value="AED" key={1}>
                  AED
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-3 p-1">
            <label htmlFor="amount-input">Enter Currency</label>
            <input
              type="text"
              id="amount-input"
              className="form-control"
            />
          </div>
            <div
              id="result"
              className="form-control mb-3"
              style={{ border: "2px solid green" }}
            >
              {`Converted Currency : ${(23.5252635).toFixed(2)}`}
            </div>
          <button
            type="button"
            className="btn btn-primary"
            id="convert-button"
          >
            Convert
          </button>
        </div>
      </div>
    );
  }
}

export default App;
