import random
import datetime
import matplotlib.pyplot as plt
import numpy as np

class QuadraticGame:
    def __init__(self):
        self.date = datetime.date.today()
        self.a, self.b, self.c = self.generate_coefficients()

    def generate_coefficients(self):
        # Use the date as a seed for reproducibility
        random.seed(self.date.toordinal())
        a = random.randint(-10, 10)
        b = random.randint(-20, 20)
        c = random.randint(-50, 50)
        return a, b, c

    def plot_quadratic(self):
        x = np.linspace(-10, 10, 100)
        y = self.a * x**2 + self.b * x + self.c

        plt.figure(figsize=(10, 6))
        plt.plot(x, y)
        plt.title(f"Parabole #1 {self.date}")
        plt.xlabel("x")
        plt.ylabel("y")
        plt.grid(True)
        plt.axhline(y=0, color='k')
        plt.axvline(x=0, color='k')
        plt.show()

    def check_guess(self, guess_a, guess_b, guess_c):
        hints = []
        if guess_a == self.a:
            hints.append("a is correct")
        else:
            hints.append(f"a is {'larger' if guess_a < self.a else 'smaller'}")

        if guess_b == self.b:
            hints.append("b is correct")
        else:
            hints.append(f"b is {'larger' if guess_b < self.b else 'smaller'}")

        if guess_c == self.c:
            hints.append("c is correct")
        else:
            hints.append(f"c is {'larger' if guess_c < self.c else 'smaller'}")

        return hints

    def play(self):
        print(f"Welcome to the Daily Quadratic Game! Today's date: {self.date}")
        print("Try to guess the coefficients (a, b, c) of the quadratic equation: ax^2 + bx + c")
        self.plot_quadratic()

        attempts = 0
        while True:
            attempts += 1
            try:
                guess_a = int(input("Enter your guess for a: "))
                guess_b = int(input("Enter your guess for b: "))
                guess_c = int(input("Enter your guess for c: "))
            except ValueError:
                print("Please enter integer values.")
                continue

            hints = self.check_guess(guess_a, guess_b, guess_c)

            if hints == ["a is correct", "b is correct", "c is correct"]:
                print(f"Congratulations! You've guessed the correct quadratic: {self.a}x^2 + {self.b}x + {self.c}")
                print(f"You solved it in {attempts} attempts.")
                break
            else:
                print("Hints:")
                for hint in hints:
                    print(f"- {hint}")
                print()

if __name__ == "__main__":
    game = QuadraticGame()
    game.play()