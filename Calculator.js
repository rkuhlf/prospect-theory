import React, {Component} from 'react';

class Calculator extends Component {

  render() {
    return (
      <div>
        <h1 className="text-primary">Calculator</h1>
        <form>
        <div class="form-group row">
          <label class="col-4 col-form-label">Gain Power</label>
          <div class="col-8">
            <input type="text" class="form-control" value="email@example.com" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-4 col-form-label">Password</label>
          <div class="col-8">
            <input type="password" class="form-control" placeholder="Password" />
          </div>
        </div>
      </form>
      </div>
    );
  }
}

// explain each variable below the calculator
export default Calculator;
