# 🎯 Parabole - The Daily Quadratic Guessing Game!

Welcome to **Parabole**, a fun and challenging daily web game where players must deduce the coefficients of a quadratic equation! Every day, a new random quadratic function of the form $y = ax^2 + bx + c$ is generated, and it's up to you to guess the coefficients $a$, $b$, and $c$ with as few guesses as possible! 

## 🌟 How to Play

1. Each day, you're presented with a graph of a quadratic function.
2. Make your first guess for the coefficients $a$, $b$, and $c$.
3. Receive feedback on how close you are to the correct coefficients.
4. Continue guessing until you find the exact values!

## 🧮 Quadratic Functions - A Quick Refresher
A quadratic function is a polynomial of degree 2, represented as:

$$y = ax^2 + bx + c$$

- $a$ controls the parabola's openness and direction.
- $b$ shifts the parabola horizontally.
- $c$ moves the parabola up or down vertically.

The challenge is to decode how these parameters shape the curve and find the right coefficients!

## 🕹️ Features
- **Daily Challenge:** A new quadratic function every day!
- **Graph Visualization:** Visual feedback with a plotted graph to aid your guesses.
- **Hint System:** Get hints based on the difference between your guess and the actual values.
- **Result Tracking:** Keep track of your wins and share them with friends!

## 🚀 Get Started
To play the game, head over to the [Parabole Game Site](https://parabole.servegame.com) and start guessing!

### Running Locally
To run the game locally on your machine:

1. Clone the repository:

```bash
git clone https://github.com/assafavital/parabole.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Visit http://localhost:1234 in your browser to play!

## 🛠️ Built With
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Graphing Library:** [functionplot by D3](https://mauriciopoppe.github.io/function-plot/)
- **Hosting:** GitHub Pages / [No-IP](https://noip.com)

## 📈 Roadmap
- [ ] Add more difficulty levels (_e.g._ larger coefficient ranges)
- [ ] Include more sophisticated hints (_e.g._ derivative/integral)
- [ ] Weekly challenges with special quadratic equations  

## 🙌 Contributions
Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/assafavital/parabole/issues).
