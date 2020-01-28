import React, {Component} from 'react';
import classNames from "classnames";

class Calculator extends Component {
  constructor(props) {
    super(props);
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
        weightedValue: 0,
        weightedsMultiplied: 0,
        utility: 0,
        id: 0
      }],
      totalUtility: 0,
      totalProspect: 0
    } 
    

    let localProspects = localStorage.getItem("prospects");
    if (localProspects) {
      this.state.prospects = JSON.parse(localProspects);
    }

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
    } else if (x === 0) {
      return 0;
    } else {
      return this.state.lossAversion * this.lossValue(x);
    }
  }

  positiveValue(x) {
    let alpha = this.state.gainPower;

    if (alpha > 0) {
      return Math.pow(x, alpha);
    } else if (alpha === 0) {
      return this.getNaturalLog(x);
    } else {
      return 1 - Math.pow(1 + x, alpha)
    }
  }

  lossValue(x) {
    let beta = this.state.lossPower;

    if (beta > 0) {
      return -Math.pow(-x, beta);
    } else if (beta === 0) {
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

  resultInput(name) {
    return (
      <input className="form-control" type="text" value={this.state[name]} readOnly />
    );
  }

  resultIndexedInput(name, index, name2) {
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
    this.setState(prevState => {
      let prospects = prevState.prospects;
      prospects.push({
        result: 0,
        probability: 0,
        weightedProbability: 0,
        weightedValue: 0,
        weightedsMultiplied: 0,
        utility: 0,
        id: 0
      });

      return {
        prospects
      }
    }, this.recalculateState);
  }

  deleteProspect(index) {
    this.setState(prevState => {
      let prospects = prevState.prospects;
      prospects.splice(index);

      return {
        prospects
      }
    }, this.recalculateState);
  }

  assignIDs() {
    let prospects = [...this.state.prospects];

    for (let i = 0; i < prospects.length; i++) {
      prospects[i].id = i;
    }

    this.setState({
      prospects
    });
  }

  recalculateState() {
    this.assignIDs();

    // add a thing that makes sure the sum of the probabilities is one
    // find the sum
    // if less than 100
    // prospects.push(new prospect to make it one)
    // delete it at the end (make it have id 0)

    let prospects = [...this.state.prospects];
    prospects.sort((p1, p2) => {
      return p1.result - p2.result;
    });

    let positiveStart = 0;

    for (let i = 0; i < prospects.length; i++) {
      prospects[i].result = parseFloat(prospects[i].result);
      prospects[i].probability = parseFloat(prospects[i].probability);
    }
    
    for (let i = 0; i < prospects.length; i++) {
      if (prospects[i].result > 0) {
        positiveStart = i;
        break;
      }
    }

    if (positiveStart !== 0) { // if there are negative possibilities
      prospects[0].weightedProbability = this.negativeWeighting(prospects[0].probability / 100);

      for (let i = 1; i < positiveStart; i++) {
        let allProbSum = 0;
        for (let j = 0; j <= i; j++) {
          allProbSum += prospects[j].probability;
        }
        let mostProbSum = allProbSum - prospects[i].probability;

        prospects[i].weightedProbability = this.negativeWeighting(allProbSum / 100) - this.negativeWeighting(mostProbSum / 100);
      }
    }

    for (let i = positiveStart; i < prospects.length - 1; i++) {
      let allProbSum = 0;
      for (let j = i; j < prospects.length; j++) {
        allProbSum += prospects[j].probability;
      }
      let mostProbSum = allProbSum - prospects[i].probability;

      prospects[i].weightedProbability = this.positiveWeighting(allProbSum / 100) - this.positiveWeighting(mostProbSum / 100);
    }

    prospects[prospects.length - 1].weightedProbability = this.positiveWeighting(prospects[prospects.length - 1].probability / 100);


    let totalProspect = 0;
    let totalUtility = 0;
    for (let i = 0; i < prospects.length; i++) {
      prospects[i].weightedValue = this.valueFunction(prospects[i].result);
      prospects[i].weightedsMultiplied = prospects[i].weightedProbability * prospects[i].weightedValue;
      prospects[i].utility = prospects[i].probability * prospects[i].result / 100;
      totalUtility += prospects[i].utility;
      totalProspect += prospects[i].weightedsMultiplied;
    }
    
    prospects.sort((p1, p2) => {
      return p1.id - p2.id;
    });

    this.setState({
      prospects,
      totalUtility,
      totalProspect
    });

    localStorage.setItem("prospects", JSON.stringify(prospects));
  }

  dataInput() {
    const labelClasses = classNames("col-4 overflow-hidden text-nowrap col-sm-12 col-lg-4".split(" "))
    const inputClasses = classNames("col-8 col-sm-12 col-lg-8".split(" "))
    return (
      <div className="mb-3">
        <form className="container" onSubmit={e => e.preventDefault()}>
          {
            this.state.prospects.map((item, index) => (
              <div key={index} className="form-group row mb-5">
                <div className="col-md">
                  <div className="row pb-2 pb-sm-0">
                    <label className={labelClasses}>Result</label>
                    <div className={inputClasses}>
                      {this.indexedDecimalInput("prospects", index, "result")}
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="row pb-2 pb-sm-0">
                    <label className={labelClasses}>Probability</label>
                    <div className={inputClasses}>
                      {this.indexedDecimalInput("prospects", index, "probability")}
                    </div>
                  </div>
                </div>
                <div className="col-md d-xl-block d-none">
                  <div className="row pb-2 pb-sm-0">
                    <label className={labelClasses}>Weighted Probability</label>
                    <div className={inputClasses}>
                      {this.resultIndexedInput("prospects", index, "weightedProbability")}
                    </div>
                  </div>
                </div>
                <div className="col-md d-xl-block d-none">
                  <div className="row pb-2 pb-sm-0">
                    <label className={labelClasses}>Weighted Value</label>
                    <div className={inputClasses}>
                      {this.resultIndexedInput("prospects", index, "weightedValue")}
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="row pb-2 pb-sm-0">
                    <label className={labelClasses}>Prospect Value</label>
                    <div className={inputClasses}>
                      {this.resultIndexedInput("prospects", index, "weightedsMultiplied")}
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="row pb-2 pb-sm-0">
                    <label className={labelClasses}>Utility Value</label>
                    <div className={inputClasses}>
                      {this.resultIndexedInput("prospects", index, "utility")}
                    </div>
                  </div>
                </div>
                <div className="col-md my-sm-3 my-lg-0 text-right">
                  <div onClick={() => this.deleteProspect(index)} className="btn btn-danger">
                    Delete
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

  // calculate certainty equivalent
  // automatically add a thing that brings the probabilities to zero

  dataResults() {
    const labelClasses = classNames("col-4 overflow-hidden text-nowrap col-sm-12 col-lg-4".split(" "))
    const inputClasses = classNames("col-8 col-sm-12 col-lg-8".split(" "))

    return (
      <div>
        <form className="container" onSubmit={e => e.preventDefault()}>
          <div className="form-group row mb-5">
            <div className="col-md">
              <div className="row pb-2 pb-sm-0">
                <label className={labelClasses}>Total Prospect</label>
                <div className={inputClasses}>
                  {this.resultInput("totalProspect")}
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="row pb-2 pb-sm-0">
                <label className={labelClasses}>Total Utility</label>
                <div className={inputClasses}>
                  {this.resultInput("totalUtility")}
                </div>
              </div>
            </div>
          </div>
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
        {this.dataResults()}
        {this.settings()}
      </div>
    );
  }
}

// explain each variable below the calculator
// have each variable link to its explanation

export default Calculator;
