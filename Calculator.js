import React, {Component} from 'react';
import classNames from "classnames";

class Calculator extends Component {
  constructor(props) {
    this.state = {
      gainPower: 0.88, // alpha
      lossPower: 0.88, // beta
      lossAversion: 2.25, // lambda
      gainProbabilityWeighting: 0.61, // gamma
      lossProbabilityWeighting: 0.69, // delta
      showSettings: false,
      prospects: [{
        result: 10,
        probability: 5,
        weightedProbability: 0,
        weightedValue: 0
      }]
    } // refactor all of these arrays into an array of objects

    this.handleChange = this.handleChange.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.addResult = this.addResult.bind(this);
    this.dataInput = this.dataInput.bind(this);
  }

  componentDidMount() {
    this.recalculateState();
  }

  // Math
  positiveWeighting(p) {
    let gamma = this.state.gainProbabilityWeighting;
    const numerator = Math.pow(p, gamma);
    const denominator = Math.pow(numerator + Math.pow(1-p, gamma), 1/gamma);

    return numerator/denominator;
  }

  negativeWeighting(p) {
    let delta = this.state.lossProbabilityWeighting;
    const numerator = Math.pow(p, delta);
    const denominator = Math.pow(numerator + Math.pow(1-p, delta), 1/delta);

    return numerator/denominator;
  }

  valueFunction(x) {
    if (x > 0) {
      return this.positiveValue(x);
    } else if (x == 0) {
      return 0;
    } else {
      return this.state.lossAversion * this.lossValue(x);
    }
  }

  positiveValue(x) {
    let alpha = this.state.gainPower;

    if (alpha > 0) {
      return Math.pow(x, alpha);
    } else if (alpha == 0) {
      return this.getNaturalLog(x);
    } else {
      return 1 - Math.pow(1 + x, alpha)
    }
  }

  lossValue(x) {
    let beta = this.state.lossPower;

    if (beta > 0) {
      return -Math.pow(-x, beta);
    } else if (beta == 0) {
      return -this.getNaturalLog(-x);
    } else {
      return Math.pow(1 - x, beta) - 1
    }
  }

  getNaturalLog(x) {
    let euler = Math.exp(1);
    return Math.log(x) / Math.log(euler);
  }

  handleChange(e, variable) {
    this.setState(prevState => {
      let newState = {};
      newState[variable] = e.target.value;

      return newState;
    }, this.recalculateState);
  }

  decimalInput(name) {
    return (
      <input type="number" onChange={e => this.handleChange(e.nativeEvent, name)} value={this.state[name]} step="0.01" className="form-control" />
    );
  }

  resultIndexedInput(name, index, name2) {
    console.log("result", this.state[name][index])
    return (
      <input className="form-control" type="text" value={this.state[name][index][name2]} readOnly />
    );
  }

  handleIndexedChange(e, variable, index, name2) {
    e.preventDefault(); // not stopping refresh
    this.setState(prevState => {
      let newState = {};
      newState[variable] = prevState[variable];
      newState[variable][index][name2] = e.target.value;

      return newState;
    }, this.recalculateState);
  }

  indexedDecimalInput(name, index, name2) {
    return (
      <input type="number" onChange={e => this.handleIndexedChange(e.nativeEvent, name, index, name2)} value={this.state[name][index][name2]} step="0.01" className="form-control" />
    );
  }

  toggleSettings() {
    this.setState(prevState => ({
      showSettings: !prevState.showSettings
    }));
  }

  addResult() {
    // refactor this
    this.setState(prevState => {
      let newResults = prevState.results;
      newResults.push(0);
      let newProbabilities = prevState.probabilities;
      newProbabilities.push(0);

      return {
        probabilities: newProbabilities,
        results: newResults
      }
    }, this.recalculateState);
  }

  recalculateState() {
    // This for regular prospects
    // calculate and show:
    // weighted probabilities
    // values recieved from value functions
    // what they are multiplied together
    // what the sum of all of the multiplied is

    let prospects = [...this.state.prospects];
    console.log("Calculating state", prospects);
  
    for (let i = 0; i < prospects.length; i++) {
      if (prospects[i].result > 0) {
        
        const weightedProb = this.positiveWeighting(prospects[i].probability / 100);
        prospects[i].weightedProbability = weightedProb;
      } else if (prospects[i].result < 0) {
        const weightedProb = this.negativeWeighting(prospects[i].probability / 100);
        prospects[i].weightedProbability = weightedProb;
      } else {
        prospects[i].weightedProbability = 0;
      }

      prospects[i].weightedValue = this.valueFunction(prospects[i].result);
    }

    console.log("finished calculating", prospects);

    this.setState({
      prospects
    });
  }

  dataInput() {
    return (
      <div className="mb-3">
        <form onSubmit={e => e.preventDefault()}>
          {
            this.state.prospects.map((item, index) => (
              <div className="form-group row">
                <div className="col-sm">
                  <div className="row">
                    <label className="col-4 col-form-label">Result</label>
                    <div className="col-8">
                      {this.indexedDecimalInput("prospects", index, "result")}
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row">
                    <label className="col-4 col-form-label">Probability</label>
                    <div className="col-8">
                      {this.indexedDecimalInput("prospects", index, "probability")}
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row">
                    <label className="col-4 col-form-label">Weighted Probability</label>
                    <div className="col-8">
                      {this.resultIndexedInput("prospects", index, "weightedProbability")}
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="row">
                    <label className="col-4 col-form-label">Weighted Value</label>
                    <div className="col-8">
                      {this.resultIndexedInput("prospects", index, "weightedValue")}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

          <button onClick={this.addResult} className="btn btn-primary">Add Event</button>
        </form>
      </div>
    );
  }

  settings() {
    return (
      <div>
        <h3 onClick={this.toggleSettings} className="btn-link cursor-pointer">Settings</h3>
        <form className={classNames({"d-none": !this.state.showSettings})}>
          <div className="form-group row">
            <label className="col-4 col-form-label">Gain Power</label>
            <div className="col-8">
              {this.decimalInput("gainPower")}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label">Loss Power</label>
            <div className="col-8">
              {this.decimalInput("lossPower")}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label">Loss Aversion</label>
            <div className="col-8">
              {this.decimalInput("lossAversion")}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label">Gain Probability Weighting</label>
            <div className="col-8">
              {this.decimalInput("gainProbabilityWeighting")}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label">Loss Probability Weighting</label>
            <div className="col-8">
              {this.decimalInput("lossProbabilityWeighting")}
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-primary">Calculator</h1>
        {this.dataInput()}
        {this.settings()}
      </div>
    );
  }
}

// explain each variable below the calculator
// hide all of the settings underneath a dropdown
export default Calculator;
