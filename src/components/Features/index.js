import React from "react";
import "./Features.css";
import Card from "./Card";
import detailed_expenses from '../../assets/detailed_expenses.svg'
import graphs from '../../assets/graphs.svg';
import mobile from '../../assets/mobile.svg';
import easy_interface from '../../assets/easy_interface.svg';
import budget from '../../assets/budget.svg';

const Features = () => {
  return (
    <div className="features">
      <h1 className="features-heading">Check out our features!</h1>
      <div className="features-container">
        <div className="features-wrapper">
          <ul className="features-items">
            <Card
              src={detailed_expenses}
              text="Register your expenses by category"
              label="Register expenses"
              path="/about"
            />
            <Card
              src={mobile}
              text="Responsive design so you can track your expenses anywhere"
              label="Recurrent expenses"
              path="/about"
            />
          </ul>
          <ul className="features-items">
            <Card
              src={graphs}
              text="Comprehensible graphs to better visualize your expenses"
              label="Comprehensive graphs"
              path="/about"
            />
            <Card
              src={easy_interface}
              text="Clean and easy to use user interface"
              label="Easy UI"
              path="/about"
            />
            <Card
              src={budget}
              text="Set a budget to have greater control of your expenses"
              label="Set a budget"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
