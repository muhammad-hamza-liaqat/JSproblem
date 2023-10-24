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
    // callback();
  }, 4000);
}

function getTopMovies(movies,callback) {
  setTimeout(() => {
    callback(["movie1", "movie2"]);
  }, 6000);
}

function sendEmail(email,name,callback) {
  setTimeout(() => {
    callback([true, email]);
  }, 4000);
}



function handleCustomerData(data){
    console.log(data);
}

function handleSendEmailResult(result){
    console.log(result);
}
function handleMovieData(data){
    console.log("movie data:", data);
}


getCustomer(1,handleCustomerData);
getTopMovies("movies1",handleMovieData);
sendEmail("@gmail.com","hamza",handleSendEmailResult);
