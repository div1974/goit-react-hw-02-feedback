import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  update = (type) => {
    console.log("type", type);
    this.setState((state) => {
      return {
        [type]: state[type] + 1,
      };
    });
  };

  countTotalFeedback = (state) => {
    return Object.values(state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = (PositiveState, totalFeedback) => {
    return Math.round((PositiveState / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback(this.state);

    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    const feedbackTypes = ["good", "neutral", "bad"];

    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={this.update}
        />
        <Section />
        <Section title="Statistics" />

        {total < 1 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}

        <Section />
      </>
    );
  }
}
