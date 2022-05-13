fetch("http://localhost:3001/userInfo")
.then(userInfo=>userInfo.json())
.then(userInfoJSON=>display(userInfoJSON));

function display(userData){
    document.getElementById("printUserName").innerHTML = userData.username;
    document.getElementById("printFullName").innerHTML = userData.fullname;
    document.getElementById("printLanguages").innerHTML = userData.languages;
    document.getElementById("printPermission").innerHTML = userData.permission;
}


