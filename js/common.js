
  //image mouse over event
  function imgmouseover(obj){    
    var font=obj.children[1];
    var img=obj.children[0];
    img.style.display="none";
    font.style.display="block";
  }
  //image mouse out event
  function imgmouseout(obj){
    var font=obj.children[1];
      var img=obj.children[0];
      font.style.display="none";
      img.style.display="block";
     
  }


