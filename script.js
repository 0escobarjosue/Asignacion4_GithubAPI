const submitBtn = document.querySelector(".submitBtn");
const userSearch = document.querySelector(".lookUpBox");

const imgPhoto = document.querySelector(".imgPhoto");
const showName = document.querySelector(".showName");
const showNumberStars = document.querySelector(".showNumberStars");
const showNumberOfRepos = document.querySelector(".showNumberOfRepos");
const showFollowers = document.querySelector(".showFollowers");
const showFollowings = document.querySelector(".showFollowings");
const showCompany = document.querySelector(".showCompany");
const showWebsite = document.querySelector(".showWebsite");
const showLocation = document.querySelector(".showLocation");
const showMemberSince = document.querySelector(".showMemberSince");
const showLinkToProfile = document.querySelector(".showLinkToProfile");
const showRepositoryList = document.querySelector(".showRepositoryList");

const clientId = "Iv1.dc17ae4074e0d764";
const clientSecret = "d0a8a086e5e36532a33ef4f51eaaee0eecfc2012";

const fetchUsers = async (users) => {
  const apiCall = await fetch(
    `https://api.github.com/users/${users}?client_id=${clientId}&client_secret=${clientSecret}`
  );
  const data = await apiCall.json();
  return { data: data };
};

const showData = (e) => {
  e.preventDefault();
  fetchUsers(userSearch.value)
    .then((response) => {
      console.log(response);

      //const image = document.createElement("img");
      imgPhoto.style;
      imgPhoto.src = response.data.avatar_url;

      console.log(imgPhoto);
      imgPhoto.style.width = "100px";
      imgPhoto.style.height = "100px";
      showName.innerHTML = response.data.name;
      showNumberStars.innejohnrHTML = response.data.stars;
      showNumberOfRepos.innerHTML = response.data.public_repos;
      showFollowers.innerHTML = response.data.followers;
      showFollowings.innerHTML = response.data.following;
      showCompany.innerHTML = response.data.company;
      showWebsite.innerHTML = response.data.website;
      showLocation.innerHTML = response.data.location;
      showMemberSince.innerHTML = response.data.created_at;
      showLinkToProfile.innerHTML = response.data.html_url;
      showRepositoryList.innerHTML = response.data.repos;
      // showName.innerHTML = response.data.name;
      //console.log(showName.innerHTML+ " this is showname")
      const array = [
        showPhoto.innerHTML,
        showName.innerHTML,
        showNumberStars.innejohnrHTML,
        showNumberOfRepos.innerHTML,
        showFollowers.innerHTML,
        showFollowings.innerHTML,
        showCompany.innerHTML,
        showWebsite.innerHTML,
        showLocation.innerHTML,
        showMemberSince.innerHTML,
        showLinkToProfile.innerHTML,
        showRepositoryList.innerHTML,
      ];

      array.forEach(function (item) {
        if (item == undefined) {
          // item= "Not Found!";
          console.log("Im in item " + item);
        }
      });
    })
    .catch((error) => {
      console.log("error encontrado" + error);
    });
};

submitBtn.addEventListener("click", showData);
