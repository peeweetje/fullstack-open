import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdotes, votes, className, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={className}>{anecdotes}</div>
      <div>has {votes} votes</div>
    </>
  );
};

const MostVotedAnecdote = ({ anecdotes, votes, className, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={className}>{anecdotes}</div>
      <div>has {votes} votes</div>
    </>
  );
};

const App = props => {
  const [selected, setSelected] = useState(0);
  // create a zero filled array with the length of the anecdotes
  const arrayVotes = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(arrayVotes);

  const handleRandomClicks = () => {
    let randomAnecdotes = Math.floor(Math.random() * anecdotes.length);

    if (randomAnecdotes === selected) {
      randomAnecdotes = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomAnecdotes);
  };

  const handleVoteClicks = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  let mostVotes = Math.max(...votes);
  let mostVoteIndex = votes.indexOf(mostVotes);

  return (
    <>
      <div className="anecdotes-container">
        <Anecdote
          className="select-anedote"
          title="Anecdotes of the day"
          anecdotes={anecdotes[selected]}
          votes={votes[selected]}
        />
      </div>
      <div className="btn-container">
        <Button onClick={handleVoteClicks} text="votes" />
        <Button onClick={handleRandomClicks} text="next anecdotes" />
      </div>
      <MostVotedAnecdote
        className="select-anedote"
        title="Anecdotes with more votes"
        anecdotes={anecdotes[mostVoteIndex]}
        votes={votes[mostVoteIndex]}
      />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
