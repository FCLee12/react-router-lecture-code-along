import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  // history is an array, holds all the places we've been
  const history = useHistory();

  const handleClick = () => {
    alert("You're going to animals!");

    // Change locaation
      // .push() the URL you want to go to
      // By doing .push() that desired URL, we're telling the browser where we want to be
      // The push changes the string in the URL bar, the browser then sifts through all declared routes and goes to the one that matches
      // The browser's forward and backwards buttons are moving us through the history array
    history.push('/animals')
  }

  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <button onClick={handleClick}>Go to animals</button>
    </div>
  );
}

export default Home;
