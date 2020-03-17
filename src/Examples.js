import React, {Component} from 'react';
import Article from "./Article";
import Choice from "./Choice";
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
      <Article title="Examples" scrollLinks={["Examples", "Allais", "Risk", "Lottery", "Insurance", "Sure Thing"]} scrollIds={["title", "allais", "risk", "lottery", "insurance", "certainty"]}>
        There are thousands of examples, both hypothetical and real-world, that can be used to compare utility theory to prospect theory and help explain how prospect theory works.

        <h3 id="allais">Allais Paradox</h3>
        <div>
          The first real challenge to utility theory and example of how prospect theory accounts for some of its faults comes in the middle of the 1950s. He proposed the following questions:
          <Choice options={{
            "Option 1": {
              "100%": "One million dollars"
            },
            "Option 2": {
              "89%": "One million dollars",
              "1%": "Nothing",
              "10%": "Five million dollars",
            }
          }}/>
          and 
          <Choice options={{
            "Option 1": {
              "89%": "Nothing",
              "11%": "One million"
            },
            "Option 2": {
              "10%": "Five million dollars",
              "90%": "Nothing",
            }
          }}/>
          On average, people prefer the first option of the first question and the second option in the second question. However, because in the first question both options have an 89% chance to win one million dollars, that shouldn't affect your choice and we can cancel it out.
          <Choice options={{
            "Option 1": {
              "11%": "One million dollars"
            },
            "Option 2": {
              "1%": "Nothing",
              "10%": "Five million dollars",
            }
          }}/>
          Similarly, for the second question both options have an 89% chance of nothing happening, so we can cancel that out as well.
          <Choice options={{
            "Option 1": {
              "11%": "One million"
            },
            "Option 2": {
              "10%": "Five million dollars",
              "1%": "Nothing",
            }
          }}/>
          All of a sudden, we can show that these two questions are exactly the same. This invalidates the independence axiom (one of the assumptions of utility theory; that all decisions are made independently with the same objectives in mind) and should make you question what you really wanted when you were making your choice, because it doesn't seem to make any sense to choose the first option one time and the second option another time when the options don't change at all. However, most economists just ignored this clear proof that their model was invalid until much later.
        {/*Give link to video: https://www.youtube.com/watch?v=c26wIhnDK9Q*/}
        </div>

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
            To give an example, 

            <Choice options={{
              "Option 1": {
                "80%": "1000"
              },
              "Option 2": {
                "100%": '700'
              }
              }} />

            This choice is framed in terms of high chance of significant gains, so most people will be risk averse and go for the sure thing. However, the utility expected value is higher for option 1, at 800 (80 % x $1000) vs 700.

            <Choice options={{
              "Option 1": {
                "80%": "Lose 1000"
              },
              "Option 2": {
                "100%": 'Lose 700'
              }
              }} />

            This is framed as a high risk of loss, so most people are risk seeking, which means they take option 1. However the utility value of option 2 is to lose 800 ($1000 x 80%), 100 dollars more than option 2.
          
          </div>
        </div>

        <h3 id="lottery">Lottery Problem</h3>
        <div>
          One of the simplest examples that demonstrates why prospect value is more accurate than utility value can be taken from the real world: a lottery bet. For example, given the following decision,
          <Choice options={{
            "Bet 10 dollars": {
              "0.1%": "9000",
              "99.9%": "0"
            },
            "Do Nothing": {
        
            }
            }} />
          Utility theory would predict that nobody takes the bet, because the expected utility value is losing one dollar. However, thousands of people buy lottery tickets every day. Why is that? We can classify this behavior as risk seeking, because the scenario is framed in terms of a small chance for gain. Remember the chart that we just looked at? Because it is a small chance of a gain, prospect theory models that humans on average will overweight it, and choose it disproportionately than utility theory predicts. Indeed, prospect theory gives this decision a value of around 44. However, if you frame the problem differently, by thinking of the money spent as lost rather than an investment
          <Choice options={{
            "Gamble": {
              "0.1%": "8991",
              "99.9%": "-9"
            },
            "Do Nothing": {
        
            }
            }} />
            the prospect value is much closer to zero, at around 28. This is why how the gamble is framed is very important to the companies offering it, and why many people lose money trying to win big.
        </div>
        
        <h3 id="insurance">Insurance</h3>
        <div>
          {/*
            4. A.1 % chance to lose $100, 000.
            B.Pay $1, 100
            for insurance against a 1 % chance to lose $100, 000.
          */}
        Another real world application of this model is in insurance. Insurance companies understand that people are risk averse when faced with the possibility of a significant loss, no matter how small the probability is. For example, say that everyday you have to make this choice, 
        <Choice options={{
          "Pay Insurance": {
            "100%": "Lose 1,100",
          },
          "No Insurance": {
            "1%": "Lose 100,000"
          }
          }} />
          Most people end up paying for the insurance, because most people are risk averse. Even though mathematically you are predicted to only lose on average 1,000 dollars a day without insurance, many people can't afford to take that risk, because a couple of bad losses in a row could destroy their lives.
        </div>

        <h3 id="certainty">Sure Thing Preference</h3>
        <div>
          The final example deals with the clear preference that humans show for getting an assured result over something that has a risk of failure (kind of like insurance). For example, would you rather take a 50-50 shot at getting 1,000 dollars, or just take 450 dollars for sure.
          Utility theory would have you believe that most humans would take the risk, because the utility value is 50 dollars higher.
          A more interesting example of this bias is the following question: Would you take 2,500 with probability 33 percent, 2,400 with probability 66 percent and 0 with probability 1 percent, or 2,400 with certainty. And another similar question, 2,500 with probability 33 percent and 0 with probability 67 percent, or 2,400 with probability 34 percent and 0 with probability 66 percent.
        </div>

        {/*<h3 id="allais">Peaked vs Bi-model</h3>
        <div>
          One of the more recent experiments that was done to create a better model was a survey where the two options were either a peaked probability curve (with a high probability of getting nothing and low probabilities of either losing or gaining 200 dollars) and a bimodal curve (high probabilities of gaining or losing 200 dollars). Most subjects prefer the peaked option.
        </div>

        <h3 id="allais">Shifting the Possibilities</h3>
        <div>
          Also mentioned in one of the newer papers is question that allows the subject to move one probability bar to one higher choice.
        </div>*/}
      </Article>
    );
  }
}

export default Examples;