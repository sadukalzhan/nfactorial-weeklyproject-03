//data from "backend"
const myArticles = [
  { id: 1, title: "7 Practical CSS Tips",image: "./assets/thread1.png", text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off." },
  { id: 2, title: "7 Practical CSS Tips",image: "./assets/thread2.png", text: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your..." },
  { id: 3, title: "7 Practical CSS Tips" ,image: "./assets/thread3.png", text: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your..."},
];

const card =   ` <div class="row">
<div class="col-8">
  <div class="h-25 row">
    <div class="col-1"><img src="./assets/avatar_default.png" alt=""></div>
    <div class="col"><p><b id = author-name></b> <small class="text-muted">in</small> <b id=topic-name>.</b> <small class="text-muted" id=date></small></p></div>
  </div>
  <div class="h-25 row"> <p class="h3 mb-5" id="ar-title"></p></div>
  <div class="h-25 row"><p id = ar-text></p></div>
  <div class="h-25 row align-items-end">
    <div class="col-2">
      <button type="button" class="btn btn-light" id=type>
      </button> 
    </div>
    <div class="col">
      <p class="text-muted mb-1 ">12 min read  ·  Selected for you</p  >
      </div>
  </div>
</div>
<div class="col-4" id=card-image><img src= class="img-fluid" alt=""></div>
</div>
<hr/> `


function loadArticles() {
const container = document.getElementById("container");


const nytimes = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=ZdSPuUogI2yA3w4eTrGEGftIyoZjAodu";
fetch(nytimes)
.then(response=>response.json())
.then(data=>data.results.splice(2,10).forEach((item)=>{
  const newCard = card.replace(`id="ar-title">`, `id="ar-title">${item.title}`).replace(`id = ar-text>`,`id = ar-text>${item.abstract}`)
  .replace(`id = author-name>`, `id = author-name>${item.byline}`)
  .replace(`id=topic-name>`, `id=topic-name>${item.section}`)
  .replace(`id=date>`, `id=date>${item.updated_date}`)
  .replace(`id=type>`, `id=type>${item.item_type}`)
  .replace(`id=card-image><img src=`, `id=card-image><img src=${item.multimedia[0].url}`);

console.log(item)
 
  container.innerHTML += newCard;

})

);



}
