//from Matter.js
const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// World.add(
//   world,
//   MouseConstraint.create(engine, {
//     mouse: Mouse.create(render.canvas),
//   })
// );

//Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];
World.add(world, walls);

//Maze Generation
const grid = Array(3)
  .fill(null)
  .map(() => {
    Array(3).fill(false);
  });

const verticals = Array(3)
  .fill(null)
  .map(() => {
    Array(2).fill(false);
  });

const horizontals = Array(3)
  .fill(null)
  .map(() => {
    Array(3).fill(false);
  });

// Old Code
//const shape = Bodies.rectangle(200, 200, 50, 50, {
//   isStatic: true,
// });
// World.add(world, shape);
//Random Shapes
// for (let i = 0; i < 50; i++) {
//   if (Math.random() > 0.5) {
//     World.add(
//       world,
//       Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
//     );
//   } else {
//     World.add(
//       world,
//       Bodies.circle(Math.random() * width, Math.random() * height, 35, {
//         render: {
//           fillStyle: "green",
//         },
//       })
//     );
//   }
// }
