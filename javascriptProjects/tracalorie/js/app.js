class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
  }

  //Public methods / API

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout) {
    this.__workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  //Private Method
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById("calories-total");
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById("calories-limit");
    totalCaloriesEl.innerHTML = this._calorieLimitEl;
  }

  _render() {
    this._displayCaloriesTotal();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker();

const breakfast = new Meal("Breakfast", 400);
tracker.addMeal(breakfast);
const lunch = new Meal("Lunch", 2000);
tracker.addMeal(lunch);

const run = new Workout("Morning Run", 300);
tracker.addWorkout(run);
