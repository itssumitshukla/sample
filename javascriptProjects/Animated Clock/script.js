function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //Setup canvas
  ctx.save(); // save the default stat

  ctx.restore(); //Restore default state
}

clock();
