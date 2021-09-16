
(function() {
    /**terms**/
    var persons=[
       {name:"ASHWIN / DIGITAL MARKETING MANAGER",profile:"Ashwin is a front-end developer and does a bit of designing as well. He developed an liking towards html, css and js as he liked coding a lot. He took some interest towards designing as it excited him too, so he felt why not give it a try. Being a generalist, he works to bring a balance to the design and code workflow in a team."},
     ];
   var myModal = {};
   
   myModal.modal = document.getElementById("myModal");
  
   myModal.triggerBtn = document.getElementById("trigger_ashwin");
   
   myModal.closeBtn = document.getElementById("closeButton");
   
   myModal.termContent = document.getElementById("termContent");
   
   myModal.show = function() {
       //load the data
       var html="";
       for (let i=0; i<persons.length; i++){
           console.log(persons[i]);
          html+="<div><p>"+persons[i].name+"</p><p>"+persons[i].profile+"</p></div><br/>";
       }
       this.termContent.innerHTML=html;
       this.modal.style.display = "block";
   }
   
   myModal.close = function() {
       this.modal.style.display = "none";
   }

   myModal.outsideClick = function() {
       var modal = this.modal;
       window.onclick = function(event) {
           if(event.target == modal) {
               modal.style.display = "none";
           }
       }
   }

   myModal.init = function() {
       var that = this;
       this.triggerBtn.onclick = function() {
           that.show();
       }
       this.closeBtn.onclick = function() {
           that.close();
       }
       this.outsideClick();
   }
   myModal.init();

})();