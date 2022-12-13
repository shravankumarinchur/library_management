console.log("yo bro");
var len=document.querySelectorAll(".seat").length;
    console.log("the length is "+len);
var i=0;
  
for(i=0; i<len; i++)
{



}




   $(".s1").click(function(){
        $(".s1").toggleClass("hide");
   })
   $(".s2").click(function(){
    $(".s2").toggleClass("hide");
   })

   $(".s3").click(function() {
    $(".s3").not($(this)).removeClass("yo");
    $(this).toggleClass("yo");
  })



//  document.getElementsByClassName("seat")[0].addEventListener("click",function(){
//      document.getElementsByClassName("seat")[0].style.backgroundColor="green";
//  console.log("hi");
//  });
