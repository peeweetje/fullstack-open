import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, result }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{result}</td>
    </tr>
  );
};

const Statictics = ({
  good,
  bad,
  neutral,
  allStats,
  getAverageStats,
  getPositiveStats,
}) => {
  if (allStats === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <table>
        <tbody className="text-body">
          <Statistic text="good" result={good} />
          <Statistic text="bad" result={bad} />
          <Statistic text="neutral" result={neutral} />
          <Statistic text="all" result={allStats} />
          <Statistic text="average" result={getAverageStats} />
          <Statistic text="positive" result={getPositiveStats + "%"} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalStats = good * 1 + bad * -1 + neutral * 0;
  const allStats = good + bad + neutral;
  const getAverageStats = totalStats ? (totalStats / allStats).toFixed(2) : "0";
  const getPositiveStats = allStats
    ? ((good / allStats) * 100).toFixed(0)
    : "0";

  return (
    <>
      <h1>Give Feedback</h1>
      <div className="btn-container">
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      </div>
      <h1>Statistics</h1>
      <Statictics
        good={good}
        bad={bad}
        neutral={neutral}
        allStats={allStats}
        getAverageStats={getAverageStats}
        getPositiveStats={getPositiveStats}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
