import React, {Component} from 'react';
import Article from "./Article";
import { Fraction, toTex } from 'algebra.js';
import Formula from "./Formula";
// use http://detexify.kirelabs.org/classify.html to translate to latex
import { Line } from 'react-chartjs-2'; // switch everything to desmos https://dzone.com/articles/generating-straight-lines-with-the-desmos-api
import {positiveWeighting, negativeWeighting, valueFunction, positiveValue, lossValue} from "./ProspectMath";
import Graph from "./Graph";


class Explanation extends Component {

  render() {
    let labels = []
    for (let p = 0; p <= 100; p += 1) {
      labels.push(p);
    }

    let data = [];

    for (let i = 0; i < labels.length; i++) {
      data.push(positiveWeighting(labels[i] / 100) * 100);
    }
    let data2 = [];

    for (let i = 0; i < labels.length; i++) {
      data2.push(negativeWeighting(labels[i] / 100) * 100);
    }

    let primaryColor = "rgb(30, 47, 109)";
    let secondaryColor = "rgb(146, 20, 12)";
    let transparentPrimary = "rgba(30, 47, 109, 0.3)";
    
    const probabilityFunctionData = {
      labels: labels,
      datasets: [
        {
          label: 'Gain Weighting',
          fill: false,
          lineTension: 0.1,
          backgroundColor: primaryColor,
          borderColor: primaryColor,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: primaryColor,
          pointBackgroundColor: 'rgb(120, 147, 209)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: primaryColor,
          pointHoverBorderColor: 'rgb(120, 147, 209)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data
        },
        {
          label: 'Loss Weighting',
          fill: false,
          lineTension: 0.1,
          backgroundColor: secondaryColor,
          borderColor: secondaryColor,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: secondaryColor,
          pointBackgroundColor: 'rgb(120, 147, 209)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: secondaryColor,
          pointHoverBorderColor: 'rgb(120, 147, 209)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data2
        },
        {
          label: 'Utility Weighting',
          fill: false,
          lineTension: 0.1,
          backgroundColor: transparentPrimary,
          borderColor: transparentPrimary,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: transparentPrimary,
          pointBackgroundColor: 'rgba(120, 147, 209, 0.3)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: transparentPrimary,
          pointHoverBorderColor: 'rgba(120, 147, 209, 0.3)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: labels
        }
      ]
    }

    return (
      <Article title="Explanation" scrollLinks={["Explanation", "Loss Aversion", "Mis-Weighting Probabilities", "Certainty Effect"]} scrollIds={["title", "loss-aversion", "probability-weighting", "certainty-effect"]}>
        <p>
          Prospect theory is a fairly recently introduced economic model that focuses on accounting for many seemingly illogical human biases, like loss aversion, the certainty effect, and the mis-weighting of probabilities that utility theory (the previous economic model) doesn't consider. 
        </p>

        <h2>Biases</h2>
        <p>Before we get into the math model, we should consider the problems that prospect theory is trying to solve.</p>
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

        <h3 id="math-model">The Theoretical Model</h3>
        <p>
          So how does prospect theory attempt to encapsulate all of these human biases into a mathematical model?
          To determine the total prospect value (how good a gamble is percieved as), you would map each probability through a function <Formula tex={`${"\\pi(p)"}`} /> and the possible result of each function through a separate function <Formula tex={`${"v(x)"}`} />.
          Probability weighting biases are accounted for with the pi function which should follow a curve like this. {/* insert a graph */}
          However, humans consider losses separately from gains, so we should define two weighting functions <Formula tex={`${"w^+(p)"}`} /> for gains and <Formula tex={`${"w^-(p)"}`} /> for losses. This means that the probability weight (<Formula tex={`${"\\pi"}`} />) function looks like <Formula notInline={true} tex={`${'\\pi(p) =\\begin{cases}w^+(p),  & \\text{if $x$ > 0} \\\\0,  & \\text{if $x$ = 0} \\\\w^-(p), & \\text{if $x$ < 0}\\end{cases}'}`} />
          where x is the value gained or lost

          To determine how attractive a risk is, all of the prospect values multiplied by their weighted probabilities are added together, and the higher the value is the more attractive the decision is. <Formula tex={`${"x"}`} /> represents the value of each possibility and <Formula tex={`${"p"}`} /> is the probability. <Formula tex={`${"n"}`} /> represents how many different possibilities you are considering. The formula to sum the prospects is <Formula notInline tex={`${"\\sum_{i=1}^{n}\\pi(p_i)v(x_i)"}`} /> or <Formula notInline tex={`${"\\pi(p_1)v(x_1) + \\pi(p_2)v(x_2) + ... + \\pi(p_n)v(x_n)"}`} /> 
          
          However, this current model glosses over the important fact that humans view possibilities relative to the other possibilities. To account for this, we can consider each probability relative to the other probabilities by adding together all of the better or worse probabilities. {/* Make sure this is right */}
          For simplicity, the first thing we will do is sort all of the different possibilities by their potential outcomes. This leaves us with a list of possibilities that follow the following equation. <Formula notInline tex={`${"x_1 \\leq x_2 \\leq ... \\leq x_k \\leq 0 \\leq x_{k+1} \\leq x_{k+2} \\leq ... \\leq x_n"}`} /> 
          This means that <Formula tex={`${"x_k"}`} /> is the last negative value and <Formula tex={`${"x_n"}`} /> is the biggest positive value. The next step the model considers is what the probability of the best case loss is. This is calculated as follows.
          <Formula notInline tex={`${"w^-(p_1 + p_2 + ... + p_k) - w^-(p_1 + p_2 + ... + p_{k - 1})"}`} />
          This same idea can be applied to all of the possibilities, but for the worst case scenario (<Formula tex={`${"x_1"}`} />) it can be simplified to just <Formula tex={`${"w^-(p_1)"}`} />. To make it easier to plug it back into our summation equation, let's set the result of our calculation to a new variable <Formula tex={`${"\\pi^-_i"}`} />. This means that we can say
          <Formula notInline tex={`${"\\pi^-_1 = w^-(p^1), \\\\ \\pi_i^- = w^-(p_1 + ... + p_i) - w^-(p_1 + ... + w^-(p_1 + ... p_{i-1})) \\\\ 2 \\leq i \\leq k"}`} />
          For the positive portion of the possibilities we follow a similar principle.
          <Formula notInline tex={`${"\\pi^+_n = w^+(p^n), \\\\ \\pi_i^+ = w^+(p_i + ... + p_n) - w^+(p_{i + 1} + ... +  p_{n}) \\\\ k + 1 \\leq i \\leq n-1"}`} />
          However this time we can consider the best case scenario by itself, and as each possible outcome improves its relation to other possibilities decreases. Now we can write our final formula as this
          <Formula notInline tex={`${"\\sum_{i=1}^k \\pi^-v(x_i) + \\sum_{i=k+1}^n \\pi^+v(x_i)"}`} />
          However, we're not quite done, because we still need to figure out how our value mapping function should look. Again, humans judge gains differently from losses, so we'll define a function <Formula tex={`${"g(x)"}`} /> for gains and <Formula tex={`${"l(x)"}`} /> for losses. Then our definition of <Formula tex={`${"v"}`} /> becomes 
          <Formula notInline={true} tex={`${'v(x) =\\begin{cases}g(x),  & \\text{if $x$ > 0} \\\\0,  & \\text{if $x$ = 0} \\\\l(x), & \\text{if $x$ < 0}\\end{cases}'}`} />
        </p>

        <h3>The Specifics of the Model</h3>
        <p>
          So how do we actually go about calculating the weighted probability and the weighted value? Well, we have some idea what we want our probability graph to look like. {/* Explain biases and what they mean for the graph */ }. Additionally, we'll want to give ourselves the flexibility of weighting negative and positive differently. So it should end up looking something like this. 
          <Line data={probabilityFunctionData} /> 
          To give us a graph with this shape, we can use the formula 
          <Formula notInline tex={`${"w^+(p) = \\frac{p^\\gamma}{(p^\\gamma + (1-p) ^ \\gamma)^{1/\\gamma}}"}`} /> 
          In this formula the <Formula  tex={`${"\\gamma"}`} /> (gamma) is a constant that we can adjust to make the formula match human behavior. We'll want to use a similar formula for losses, but with a different constant variable: <Formula tex={`${"\\delta"}`} /> (delta). 
          <Formula notInline tex={`${"w^-(p) = \\frac{p^\\delta}{(p^\\delta + (1-p) ^ \\delta)^{1/\\delta}}"}`} />
          {/*explain why this formula works*/}
        </p>
        <p>
          Now we can develop our value mapping function. Increasing value has diminishing returns, so the as the possible gain gets larger and larger, our desire for that gain doesn't grow at quite the same rate and begins to drop off. 
          <Formula notInline tex={`${"l(x) =\\begin{cases} x^\\alpha,  & \\text{if $\\alpha$ > 0} \\\\ ln(x),  & \\text{if $\\alpha$ = 0} \\\\ 1-(1+x)^\\alpha, & \\text{if $\\alpha$ < 0}\\end{cases}"}`} />

          We'll also want to multiply our loss function by a loss aversion constant.
          <Formula notInline tex={`${"l(x) =\\begin{cases} \\lambda * -(-x)^\\beta,  & \\text{if $\\beta$ > 0} \\\\ \\lambda*-ln(-x),  & \\text{if $\\beta$ = 0} \\\\ \\lambda * [(1-x)^\\beta - 1], & \\text{if $\\beta$ < 0}\\end{cases}"}`} /> We can determine what each of these possible functions are based on the gain weighting function. We need to make sure that the input is always positive, so we will multiply x by negative one, but we also need the output to be negative (because it is a loss) so we multiply the whole function by negative one.

          The final graph then looks something like this.
          
        </p>
        <Graph />

        <p>
          text under graph
        </p>
      </Article>
    );
  }
}
// write explanation
export default Explanation;
