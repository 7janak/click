   var isStatus= document.querySelector("h5")
   var btn= document.querySelector("#add")
    var check =0
   add.addEventListener("click",function(){
      if (check==0) {

        isStatus.innerHTML= "Hi! friend"
        isStatus.style.color="green"
        btn.innerHTML= "Remove Friend"
        check=1
      }else{
        isStatus.innerHTML= "You are Stranger"
        isStatus.style.color="red"
        btn.innerHTML= "Add friend"
        check=0

      }
    
  

   })
   