var array_data =[
    { 
        name: "استشارة",
        info:"1111",
        price1:15,
        price2:20,
        date:22,
    },
    { 
        name: "استشارة",
        info:"1111",
        price1:15,
        price2:20,
        date:22,
    },

]


function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("w3-black", "w3-red");
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("w3-red", "w3-black");
    }
  }