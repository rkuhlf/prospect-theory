import React, {Component} from 'react';
import Article from "./Article";

class Explanation extends Component {

  render() {
    return (
      <Article title="Explanation" scrollLinks={["Explanation", "Loss Aversion", "Mis-Weighting Probabilities", "Certainty Effect"]} scrollIds={["title", "loss-aversion", "probability-weighting", "certainty-effect"]}>
        <p>
          Prospect theory is a fairly recently introduced economic model that focuses on accounting for many seemingly illogical human biases, like loss aversion, the certainty effect, and the mis-weighting of probabilities that utility theory (the previous economic model) doesn't consider. 
        </p>

        <h3 id="loss-aversion">Loss Aversion</h3>
        <p>
          Loss aversion is the economic term for the basic idea that people are less likely to take a risk of losing something than they are to take a risk to gain something. Loss aversion can explain the sunk cost fallacy, because once you've invested time into doing something, quitting means that all of that time is "lost."
          {/* write about status quo effect and endowment effect */}
        </p>

        <h3 id="probability-weighting">Mis-Weighting Probabilities</h3>
        <p>
          The certainty effect is the average person's tendacy to treat probabilities as if they are further from the extreme than they actually are. For example, an individual is likely to treat a 1% probability as a 5% probability and a 99% probability as a 95% probability.
        </p>

        <h3 id="certainty-effect">The Certainty/Possibility Effect</h3>
        <p>
          The certainty and possibility effects are another example of mis-weighting probabilities. The possibility effect states that an increase in probability from 0% to 5% (making the event possible) will be treated with much more weight than an increase from 45% to 50%. The certainty effect is similar, stating that an increase from 95% to 100% (making it certain) will be treated differently from a change from 50% to 55% (or any other probabilities far from the extremes).
        </p>

        <h3 id="math-model">The Mathematical Model</h3>
        <p>
          So how does prospect theory attempt to encapsulate all of these human biases into a mathematical model?
        </p>
      </Article>
    );
  }
}
// write explanation
export default Explanation;
