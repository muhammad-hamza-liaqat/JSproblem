// write your logic here & update existing code where required
//const user = getCustomer();
//   const movies = getTopMovies();
//   console.log(movies);
//   const sendMail= sendEmail()
//   console.log(sendMail);
//
// call functions & get results asynchronously
function getCustomer(id,callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Raheel Safdar",
      isGold: true,
      email: "email",
    });
  }, 4000);
}
function getTopMovies(movies,callback) {
  setTimeout(() => {
    callback(["movie1", "movie2"]);
  }, 6000);
}
function sendEmail(email,name,callback) {
  setTimeout(() => {
    callback(true);
  }, 4000);
}
getCustomer(1,(user) => {
  console.log(user);
  getTopMovies("movies1",(movies) => {
    console.log(movies);
    sendEmail("@gmail.com","raja",(sendmoves) => {
      console.log(sendmoves);
    });
  });
});