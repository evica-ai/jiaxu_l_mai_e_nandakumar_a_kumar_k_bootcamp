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
