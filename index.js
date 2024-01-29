// https://randomuser.me/api/?results=24

let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  // setTimeout(() => {
  //   console.log(userData);
  // }, 2000);
  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  document.body.innerHTML = userData.map(
    (user) =>
    `
    <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.last}">
      <h3>${user.name.first}</h3>
      <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
      <em>Membre depuis : ${user.registered.date} jours</em>
    </div>
    `
  ).join("");
};

userDisplay();
