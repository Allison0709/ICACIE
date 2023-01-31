/ matthais example
document.querySelector("#survey-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const arr = [...data];
    console.table(arr);
    console.log(data.getAll("langs"));
    console.dir(Object.fromEntries(arr));
  });
  
