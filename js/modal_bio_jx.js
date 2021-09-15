
(function() {
   
   myModal.modal = document.getElementById("myModal");
  
   myModal.triggerBtn = document.getElementById("trigger_jx");
   
   myModal.closeBtn = document.getElementById("closeButton");
   
   myModal.termContent = document.getElementById("termContent");
   
   myModal.show = function() {
        //load the data
        (() => {
            let person = {
                name: "Liu Jiaxu",
                role: "Digitial Marketing Manager",
                deescription: "She is a visual and animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."
            };
        
            function showBioData() {
                let panel = document.querySelector(".bio.info.jiaxu").children;
        
                //panel will return a node list (collection) of the contents of the bio-info section
        
                panel[0].textContent = person.name;
                panel[1].textContent = person.role;
                panel[2].textContent = person.description;
            }
        
            
            // console.log(person.name);
            // console.log(person.role);
        
            showBioData();
        })();
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