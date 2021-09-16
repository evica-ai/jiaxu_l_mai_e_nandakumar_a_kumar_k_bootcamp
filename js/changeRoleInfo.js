var person = [{
    name: "Liu Jiaxu",
    role: "Digitial Marketing Manager",
    description: "She is a visual and animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."
},
{
    name: "Ashwin Nandakumar",
    role: "Squad Leader",
    description: "Ashwin is an front-end developer and does a bit of designing as well. He developed an liking towards html, css and js as he likes coding a lot. He took some interest towards designing as it excited him too, so he felt why not give it a try. Being an generalist, he works to bring a balance to the design and code workflow in a teamd animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."
},
{
name: "Kanak Kumar",
role: "Design Specialist",
description: "She is a visual and animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."
},{
name: "Evica Mai",
role: "Front-end Developer",
description: "Evica strives to become a versatile designer capable of various styles and art mediums. Whether it is creating websites, indie games, prints, animations and many other forms of digital media, Evica loves creating a product exuding her style while staying authentic to the message and goal of the task. In fact, she is passionate on projects that strikes the perfect balance between user experience and design. She is ready to take on anything with her pink pastel attitude.hwin is an front-end developer and does a bit of designing as well. He developed an liking towards html, css and js as he likes coding a lot. He took some interest towards designing as it excited him too, so he felt why not give it a try. Being an generalist, he works to bring a balance to the design and code workflow in a teamd animation designer. His strength lies in his ability to use his multidisciplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands."
}
];
function changeRole(index) {
    console.log(index);
    var panel = document.getElementById("content");
    panel.innerHTML = person[index].name + "<br/>" + person[index].role + "<br/><span style='text-align:left'>" + person[index].description+"</span>";
}

function changeResetRole(index) {
    console.log(index);
    var panel = document.getElementById("content");
    panel.innerHTML = "They are a group of power rangers: red, yellow, blue and white. Helping each other help    fulling cutsomer's vision is what we do best with a splash of sparkles (and donut    sprinkles).";
}