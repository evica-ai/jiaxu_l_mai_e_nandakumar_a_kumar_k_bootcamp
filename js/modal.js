
(function() {
    /**terms**/
    var persons=[
       {name:"CONTINUED... ",profile:" On a more professional note, we are passionate about meeting above the standard and fusing your chosen style and vision together.She is a visual and animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."},
     ];
   var myModal = {};
   
   myModal.modal = document.getElementById("myModal");
  
   myModal.triggerBtn = document.getElementById("triggerButton");
   
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