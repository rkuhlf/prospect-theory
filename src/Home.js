import React, {Component} from 'react';
import GoToCard from "./GoToCard";
// view page online at http://prospect-theory.herokuapp.com/

class Home extends Component {
  render() {
    return (
      <div className="mt-n2">
        <div className="bg-dark text-center p-5">
          <h1><span className="badge badge-secondary text-light text-wrap p-3">Prospect Theory</span></h1>
          <p className="text-light">Your home for getting a grip on what prospect theory means and using that to understand decisions.</p>
        </div>
        <p className="text-center p-4">Prospect Theory: An innovative idea idea applying the psychologically obvious principle that humans aren't always rational to the very rational world of economics.</p>
        <div className="container-fluid mb-5">
          <div className="row">
            <GoToCard imgURL="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667742275/pic1.svg" linkTo="/explanation" cardTitle="Explanation">Gain an improved understanding of the ideas of prospect theory.</GoToCard>
            <GoToCard imgURL="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667742275/pic2.svg" linkTo="/examples" cardTitle="Examples">View hypothetical and realistic applications of prospect theory.</GoToCard>
            <GoToCard imgURL="https://res.cloudinary.com/dymfw7qfi/image/upload/v1667742275/pic3.svg" linkTo="/calculator" cardTitle="Calculator">Use a calculator to compare prospect theory to utility theory.</GoToCard>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
