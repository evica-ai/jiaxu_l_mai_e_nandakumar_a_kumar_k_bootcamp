(() => {
    let person = {
        name: "Ashwin Nandakumar",
        role: "Squad Leader",
        description: "Ashwin is an front-end developer and does a bit of designing as well. He developed an liking towards html, css and js as he likes coding a lot. He took some interest towards designing as it excited him too, so he felt why not give it a try. Being an generalist, he works to bring a balance to the design and code workflow in a teamd animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."
    };

    function showBioData() {
        let panel = document.querySelector(".bio.info.ashwin").children;

        //panel will return a node list (collection) of the contents of the bio-info section

        panel[0].textContent = person.name;
        panel[1].textContent = person.role;
        panel[2].textContent = person.description;
    }

    
    // console.log(person.name);
    // console.log(person.role);

    showBioData();
})();
