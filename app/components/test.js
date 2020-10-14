
const  articles = [ {
    id: "433576",
    title: "Alpine tourism",
    text: "There wes a good weather on the mountain. onsectetur adipisicing elit. Quo esse explicabo excepturi totam quas ex blanditiis perferendis animi maxime ducimus? Sit nesciunt amet aut animi, quibusdam id, eaque nemo itaque libero, ducimus dolor tenetur.",
    completed: false,
    category: ["tourism"],
},
{
    id: "086784567",
    title: "Cookery for animals",
    text: "Wet condipisicing elit. Quo esse explicabo excepturi totam quas ex blanditiis perferendis animi maxime ducimus? Sit nesciunt amet aut animi, quibusdam id, eaque nemo itaque libero, ducimus dolor tenetur.",
    completed: false,
    category: ["food", "animals"],
},
{
    id: "45768568",
    title: "Dogs are in the car?",
    text: "Dogs wes a good weather on the mountain. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo esse explicabo excepturi totam quas ex blanditiis perferendis animi maxime ducimus? Sit nesciunt amet aut animi, quibusdam id, eaque nemo itaque libero, ducimus dolor tenetur.",
    completed: false,
    category: ["animals", "machines", "philosophy"],
}]

const category = ["animals", "frog", "tourism"]

const res = articles.filter( article => 
     article.category.some(tag =>
         category.some(tag2 => tag === tag2)
    )
)

console.log(res)