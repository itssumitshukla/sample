function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //Setup canvas
  ctx.save(); // save the default stat
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);

  ctx.restore(); //Restore default state
}

clock();
