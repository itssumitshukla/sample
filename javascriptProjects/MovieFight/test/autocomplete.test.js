// describe("Authentication feature", () => {
//   it("Test input", () => {
//     console.log("TEST");
//   });

//   it("Shows an autocomplete", () => {
//     createAutoComplete({
//       root: document.querySelector("#target"),
//     });
//   });
// });

const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 3500);
  });
};

beforeEach(() => {
  document.querySelector("#target").innerHTML = "";
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        { Title: "avengers" },
        { Title: "not avengers" },
        { Title: "movies" },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it("dropdown starts closed", () => {
  const dropdown = document.querySelector(".dropdown");

  expect(dropdown.className).not.to.include("is-active");
});

it("after search, dropdown opens up", async () => {
  const input = document.querySelector("input");
  input.value = "avengers";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).to.include("is-active");
});

it("after searching, display some results", async () => {
  const input = document.querySelector("input");
  input.value = "avengers";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const itesms = document.querySelectorAll(".dropdown-item");
  expect(itesms.length).to.equal(3);
});
