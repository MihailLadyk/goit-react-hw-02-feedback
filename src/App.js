import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

export default class App extends Component {
  state = {
    upvotes: 0,
    neutral: 0,
    downvotes: 0,
  };

  

  handleVote = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  calaculateTotalVotes = () => {
    return this.state.upvotes + this.state.downvotes + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.upvotes / this.calaculateTotalVotes()) * 100;
  };

  render() {
    const totalVotes = this.calaculateTotalVotes();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="">
          <FeedbackOptions
            options={["upvotes", "downvotes", "neutral"]}
            onVote={this.handleVote}
          />

          <h3>Statistics</h3>

          {this.state.upvotes ||
          this.state.downvotes ||
          this.state.neutral > 0 ? (
            <Statistics
              upvotes={this.state.upvotes}
              downvotes={this.state.downvotes}
              neutral={this.state.neutral}
              total={totalVotes}
              percentage={percentage}
            />
          ) : (
            <Notification message={"Hallou"} />
          )}
        </Section>

        <hr />
      </div>
    );
  }
}
