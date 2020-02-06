import React, {Component} from 'react';
import Article from "./Article";
// original article http://www.its.caltech.edu/~camerer/Ec101/ProspectTheory.pdf

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
          The first real challenge to utility theory and example of how prospect theory accounts for some of its faults comes in the middle of the 1950s. However, most economists just ignored this clear proof that their model was invalid until much later.
        </p>

        <h3>Sure Thing Preference</h3>
        <p>
          This leads us into the clear preference that humans show for getting an assured result over something that has a risk of failure. For example, would you rather take a 50-50 shot at getting 1,000 dollars, or just take 450 dollars for sure.
          Utility theory would have you believe that most humans would take the risk, because the utility value is 50 dollars higher.
          A more interesting example of this bias is the following question: Would you take 2,500 with probability 33 percent, 2,400 with probability 66 percent and 0 with probability 1 percent, or 2,400 with certainty. And another similar question, 2,500 with probability 33 percent and 0 with probability 67 percent, or 2,400 with probability 34 percent and 0 with probability 66 percent.
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
          
          <div>
            To give an example, {/*
              1. A.80 % chance to win $1000.
              B.$700
              for sure
              
              This choice is framed in terms of high chance of significant gains.Most people will favor risk aversion.Most choose B.However, the mathematical expected value of A is $800(80 % x $1000).An“ econ” would choose A.
              
              2. A.80 % chance to lose $1000(and 20 % chance of losing nothing).
              B.Lose $700
              for sure.
              
              This is framed in terms high risk of significant loss.Most would favors risk seeking.Most take A.However the expected value of A is to lose $800(-$1000 x 80 % ).B is the better economical choice.
            */}
          
          </div>
        </div>
        
        <h3>Lottery Problem</h3>
        <div>
          {/*
          A.Bet $10 on a .1 % chance to win $9, 000.
          B.Do nothing.
          
          This scenario is framed in terms of small chance
          for significant gain.Many will favor risk seeking and choose A.The economical choice is B because the expected value of A.is to lose $1([.1 % x $9, 000] - $10).
          */}
        </div>
        
        <h3>Insurance</h3>
        <div>
          {/*
            4. A.1 % chance to lose $100, 000.
            B.Pay $1, 100
            for insurance against a 1 % chance to lose $100, 000.
          */}
        </div>

        <h3 id="allais">Peaked vs Bi-model</h3>
        <p>
          One of the more recent experiments that was done to create a better model was a survey where the two options were either a peaked probability curve (with a high probability of getting nothing and low probabilities of either losing or gaining 200 dollars) and a bimodal curve (high probabilities of gaining or losing 200 dollars). Most subjects prefer the peaked option.
        </p>

        <h3 id="allais">Shifting the Possibilities</h3>
        <p>
          Also mentioned in one of the newer papers is question that allows the subject to move one probability bar to one higher choice.
        </p>
      </Article>
    );
  }
}

// Talk about allais
// Show the table with four squares and risk seeking
// give example of loss aversion
// show graph that accounts for the certainty effect

export default Examples;