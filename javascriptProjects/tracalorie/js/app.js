class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }

  //Public methods / API

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this.__workouts.push(workout);
    this._totalCalories -= workout.calories;
  }

  //Private Method
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById("calories-total");
    totalCaloriesEl.innerHTML = this._totalCalories;
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

const run = new Workout("Morning Run", 300);
tracker.addWorkout(run);

const lunch = new Meal("Lunch", 2000);
tracker.addMeal(lunch);
