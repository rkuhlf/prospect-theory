import React, {Component} from 'react';
import GoToCard from "./GoToCard";

class Home extends Component {
5
  render() {
    return (
      <div>
        <div className="bg-dark text-center p-5">
          <h1><span className="badge badge-secondary text-light p-3">Prospect Theory</span></h1>
          <p className="text-light">Your home for getting a grip on what prospect theory means and using that to understand decisions.</p>
        </div>
        <p className="text-center p-4">Prospect Theory: An innovative idea idea applying the psychologically obvious principle that humans aren't always rational to the very rational world of economics.</p>
        <div className="container-fluid mb-5">
          <div className="row">
            <GoToCard imgURL="https://doc-0c-94-docs.googleusercontent.com/docs/securesc/ui2aj4k3jlg6bcmj5j84ripgcg412oen/m7mgpphm10vuo6feg4gfdnuj99vf4tcg/1579996800000/17301906737084653961/17301906737084653961/1QYnVDVT14jJL_o8kIOEci7_yXT3M1rVd?e=view&authuser=0" linkTo="/explanation" cardTitle="Explanation">Gain an improved understanding of the ideas of prospect theory.</GoToCard>
            <GoToCard imgURL="https://doc-08-94-docs.googleusercontent.com/docs/securesc/ui2aj4k3jlg6bcmj5j84ripgcg412oen/9qr6msa8e9gav6dj4687a12kusvh8j32/1579996800000/17301906737084653961/17301906737084653961/1PS_ha3Oix6iSFI6mXdWBDuvi3BcklWTL?e=view&authuser=0" linkTo="/examples" cardTitle="Examples">View hypothetical and realistic applications of prospect theory.</GoToCard>
            <GoToCard imgURL="https://doc-0k-94-docs.googleusercontent.com/docs/securesc/ui2aj4k3jlg6bcmj5j84ripgcg412oen/n4a4vc5eapln499enmh8e9cbok5jss9o/1579996800000/17301906737084653961/17301906737084653961/1tx-o-eMRvjJP5qpts0FlC6aBh7HuWvtW?e=view&authuser=0" linkTo="/calculator" cardTitle="Calculator">Use a calculator to compare prospect theory to utility theory.</GoToCard>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
