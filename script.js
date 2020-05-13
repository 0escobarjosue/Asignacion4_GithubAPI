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
const popUp = document.querySelector(".popUp");

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
      if (response.data.message) {
        console.log("works");
        popUp.innerHTML =
          "User does not exist or any other error may have ocurred";
      } else {
        popUp.innerHTML = "";
        const res = Array.from(response.data);

        const arrayInfo = [
          response.data.avatar_url,
          response.data.name,
          response.data.stars,
          response.data.public_repos,
          response.data.followers,
          response.data.following,
          response.data.company,
          response.data.website,
          response.data.location,
          response.data.created_at,
          response.data.html_url,
          response.data.repos,
        ];
        const nArrayInfo = arrayInfo.map((item) => {
          if (item == undefined) {
            item = "not found";
          }
          return item;
        });
        const variablesArray = [
          imgPhoto,
          showName,
          showNumberStars,
          showNumberOfRepos,
          showFollowers,
          showFollowings,
          showCompany,
          showWebsite,
          showLocation,
          showMemberSince,
          showLinkToProfile,
          showRepositoryList,
        ];

        const popUpChecker = variablesArray;
        popUpChecker.splice(0, 1);
        popUpChecker.forEach((item) => {
          if (item === "not found") {
            console.log("true to run ");
          }
        });

        variablesArray.forEach((item, index) => {
          variablesArray[index].innerHTML = nArrayInfo[index];
        });
        imgPhoto.style;
        imgPhoto.src = nArrayInfo[0];
        imgPhoto.classList = "imgAvatar";
        imgPhoto.style.width = "100px";
        imgPhoto.style.height = "100px";
      }
    })

    .catch((error) => {
      console.log("Error found" + error);
    });
};

submitBtn.addEventListener("click", showData);
