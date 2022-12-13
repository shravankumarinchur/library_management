const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


var userList=[

  {
    username:"anitha",
    password:"ani123"

  },
  {
    username:"hanu",
    password:"hanu123"


  }
]

function getInfo(){
  var user=document.getElementById("userName").value;
  var pass=document.getElementById("passWord").value;
  console.log("the is "+user);

  var len=userList.length;
  console.log("the length is "+len);
  var i=0;
  flag=0;

  for(i=0; i<len; i++)
  {
    if(user==userList[i].username && pass==userList[i].password)
    {
      console.log("you are valid");
      window.location.href="lib2.html"
      flag=1;
    }
    else
    {
      
    }
  }
  if(flag==0)
  {
    console.log("you are invalid");
  }
}

function registerUser()
{
  alert("hii");
  console.log("gi");
  var reguser=document.getElementById("regUsername").value;
  var regpass=document.getElementById("regPassword").value;

  var tempUser=
  {
    username:reguser,
    password:regpass
  }
  userList.push(tempUser);

  console.log(userList);
}



function react(){
  document.getElementById("animate").classList.add("hidden");
}

function react2(){
 
  document.getElementById("animate").classList.remove("hidden");
}