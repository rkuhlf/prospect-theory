import React, {Component} from 'react';
import Article from "./Article";

class Examples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "disappointment-fear": false,
      "loss-hope": false,
      "gain-hope": false,
      "loss-fear": false,
    }
  }

  openTable(name) {
    this.setState(prevState => {
      let newState = prevState;
      newState[name] = !prevState[name];
      
      this.setState(newState);
    })
  }

  render() {
    return (
      <Article title="Examples" scrollLinks={["Examples"]} scrollIds={["title"]}>
        There are thousands of examples, both hypothetical and real-world, that can be used to compare utility theory to prospect theory and help explain how prospect theory works.

        <h3 id="allais">Allais Paradox</h3>
        <p>
          The first real challenge to utility theory and example of how prospect theory accounts for some of its faults comes in the middle of the 1950s. 
        </p>

        <h3 id="risk">Risk Aversion and Risk Seeking</h3>
        <div>
          The utility theory model shows risk as following a linear path, but prospect theory has several updates.

          <table className="table px-3 my-2">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="w-50">Gains</th>
                <th scope="col" className="w-50">Losses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  High Probability
                  <br />
                  <span className="text-muted"><small>
                    Certainty Effect
                  </small></span>
                </th>
                <td>
                  95% chance to win $10,000
                  <hr />
                  <b>Fear</b> of disappointment: <span className="cursor-pointer btn-link" onClick={() => this.openTable("disappointment-fear")}>RISK-AVERSE</span>
                  {
                    this.state["disappointment-fear"] 
                    ? 
                    (<div>
                      <hr className="my-1"/>
                      <small>
                      The average person would be likely to take the sure thing (e.g. $9,000) rather than risk it.
                      </small> 
                    </div>) 
                    :
                    (<div></div>)
                  }
                </td>
                <td>
                  95% chance to lose $10,000
                  <hr />
                  <b>Hope</b> to avoid loss: <span className="cursor-pointer btn-link" onClick={() => this.openTable("loss-hope")}>RISK-SEEKING</span>
                  {
                    this.state["loss-hope"] 
                    ? 
                    (<div>
                      <hr className="my-1"/>
                      <small>
                      The average person would be likely to take the risk over the sure thing (e.g. lose $9,000).
                      </small> 
                    </div>) 
                    :
                    (<div></div>)
                  }
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Low Probability
                  <br />
                  <span className="text-muted"><small>
                    Possibility Effect
                  </small></span>
                </th>
                <td>
                  5% chance to win $10,000
                  <hr />
                  <b>Hope</b> of a large gain: <span className="cursor-pointer btn-link" onClick={() => this.openTable("gain-hope")}>RISK-SEEKING</span>
                  {
                    this.state["gain-hope"] 
                    ? 
                    (<div>
                      <hr className="my-1"/>
                      <small>
                      The average person would be likely to take the risk over the sure thing (e.g. gain $750).
                      </small> 
                    </div>) 
                    :
                    (<div></div>)
                  }
                </td>
                <td>
                  5% chance to lose $10,000
                  <hr />
                  <b>Fear</b> of large loss: <span className="cursor-pointer btn-link" onClick={() => this.openTable("loss-fear")}>RISK-AVERSE</span>
                  {
                    this.state["loss-fear"] 
                    ? 
                    (<div>
                      <hr className="my-1"/>
                      <small>
                      The average person would be likely to take the sure thing (e.g. lose $750) rather than risk it.
                      </small> 
                    </div>) 
                    :
                    (<div></div>)
                  }
                </td>
              </tr>
              
            </tbody>
          </table>

        </div>
      </Article>
    );
  }
}

// Talk about allais
// Show the table with four squares and risk seeking
// give example of loss aversion
// show graph that accounts for the certainty effect

export default Examples;
