import React, {Component} from 'react';
import GoToCard from "./GoToCard";

class Home extends Component {
5
  render() {
    return (
      <div>
        <div className="bg-dark text-center p-5">
          <h1><span className="badge badge-secondary text-light text-wrap p-3">Prospect Theory</span></h1>
          <p className="text-light">Your home for getting a grip on what prospect theory means and using that to understand decisions.</p>
        </div>
        <p className="text-center p-4">Prospect Theory: An innovative idea idea applying the psychologically obvious principle that humans aren't always rational to the very rational world of economics.</p>
        <div className="container-fluid mb-5">
          <div className="row">
            <GoToCard imgURL="https://public.boxcloud.com/api/2.0/files/605676231257/content?preview=true&version=641918418857&access_token=1!xUKddnwOcl9U70b2XW66RLMLq5izml9QtkvnV_eAXnRToUQFASIUorN_GIyA81gB2zqhsdA7tXOtXDE-WFxAzuJogi37Wjw82YJOqeZwGFba7lHTSRRDLgCH2vIjAtk2A0uwpoVsDf4y6RnLokMuAgjq5YBVe8ovqlIuckEv3CAXaPNtseuMsnpzTP98F1MuTBADNvhUXIMCA-IA_e-X3Vvb9jEUht3gzFjy2iqLi_OmR55MUi9VHpyMGFuuPxr22s1NbOf2vu84cRNxTbzP97xOvhEH6n-b_M0JP-f0ESECHZwpGeYZW9-h1wwQpk30IkLVsyrr8qgBX4Vt57WuvCGXriLrmNTfD9J4YfVF03AKkzRSybUcmhFNuqEp1o55SNpHcZLEA1-zOECYwWnLqsPJUUiIvt5oVNIZGDSunifsW0LbboO_pmI1lK_13SBSiDx5g4a13WMjPJVXejgeCxU66nkZnNYPc7gufyK6Pd3pqF4gkT4yjBnwKlcpGgJ4MTk22z3N67ZtAFVWcJ4qhL3Zkdfx8VtVkF4iJvWKE_646Mi_3JphMEyDov3aRHn4tQk.&box_client_name=box-content-preview&box_client_version=2.33.1" linkTo="/explanation" cardTitle="Explanation">Gain an improved understanding of the ideas of prospect theory.</GoToCard>
            <GoToCard imgURL="https://public.boxcloud.com/api/2.0/files/605676516678/content?preview=true&version=641918723478&access_token=1!Xq1tHNaNOqsTYTeWxLEnDFIkWvy13daSxWeccxEycQ-Coo7FWhwy-CvQBYx7L_KjZ9PJJ2yHZTPComSyyg5iFHdslXcHCxwXc9KT5BlvkdLhY9-H2CJANZeX3MoRgPyiBNrKGySyUz8MyfLW2kRZHuylFbA2R7pGfMHHAKi63U2B0n3aO67o30MyBb6DEAiowWjIYw32gH3zqm8becXfHjbU-dbPq36Yg6EvoKI9yg7eKk_r0HYRTRIMXWOzPfDfTIOGIwVSV4xBD4h-h367fJ47FpGcIb0m0PTez2sc0oXqTxpHPn2_vf70bmfrS2-jzJNTq4vOMsrkinXCakOb1samjfF7ejUY0135avSF2QfPD5Q6BdIhlXY8QHZYNyufHugtxtOqF1o59GVUJ4vW4odwuoaZ3EJ2oxnaIEItTeyzH2z0-ZUHpeOyYsodTunnP7RHW6coWYBoaNwapyOZR7bf4FKY84cygRNgnz4LA38R2dHekGBZNppg-2mOa5lB-MX7ydI-ItHdQ2yKGAIdPZ2ebihgc1TF_R8rVgSzA8wDLkGZCbOQ3JIBk2PYxRypLIA.&box_client_name=box-content-preview&box_client_version=2.33.1" linkTo="/examples" cardTitle="Examples">View hypothetical and realistic applications of prospect theory.</GoToCard>
            <GoToCard imgURL="https://public.boxcloud.com/api/2.0/files/605676865652/content?preview=true&version=641919044852&access_token=1!9Dy0wOfXWJpWHuV7D3USCBf2SDUwsldY1Y7aYUEWN3N9lMy15QrrYDaYnF4-f9AAkZmL-z4yc77Z_g0oMw_0_VClZMfDKijCVPN9ZvnBYNq_YLl56soIGzznqeSVOrzmjB8GJ92eI0yIjk5WOo2J8dakPfACiV3FCcRI-T5nAkhB1SB8sx5HNrTsLPe5SxK6Am048anblhg9QrVZfca-Bj9E9qBn53UaRGxcBWmGCbtBk-F63tLwWdTxT-Qarpe4xp7THtaO_VfmQlB1wVWKzWesfF8-qIiW9Rr3r0HRHeNOQCOcjTfXXpSYKPr4AyVg7mHtX3zQ_2ZeSgLrPan-lIRhR4bKK_CSVQKYQ0HXXc1EEj2YYLj-3gQ81_EFtr9gryj8FyvxwhrfrERoVgxEt8cY1ld-mHShc-BGi8WVMmruo_8qfiYeR6rtc7T6uuSg9Bc5KmcCFpx73ULYshdsgsm8RYqBBD4bJWxTjxPOIWOfAdqdoi67s21akMjDQZLNcNgXAKYyMzvtlPeoUYDlsMvlqmvsCkysooxBH7qCK3tDAHOTfjTJOiqfI1n7nLiKIZs.&box_client_name=box-content-preview&box_client_version=2.33.1" linkTo="/calculator" cardTitle="Calculator">Use a calculator to compare prospect theory to utility theory.</GoToCard>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
