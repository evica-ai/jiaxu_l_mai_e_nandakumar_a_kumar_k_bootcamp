
(function() {
    /**terms**/
    var persons=[
       {name:"EVICA MAI / FRONT-END DEVELOPER",profile:"Evica strives to become a become a versatile designer capable of various styles and art mediums. Whether it is creating website, indie games, prints, animations and many other forms of digital media, she loves creating a product exuding her style while staying authentic to the message and goal of the task. In fact, she is passionate on projects that strikes the perfect balance between user experience and design. She is ready to take on anything with her pink pastel attitude."},
     ];
   var myModal = {};
   
   myModal.modal = document.getElementById("myModal");
  
   myModal.triggerBtn = document.getElementById("trigger_evica");
   
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