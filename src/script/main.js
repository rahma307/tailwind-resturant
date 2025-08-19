let cont = document.querySelector('.cont');
let header = document.querySelector('header');
window.addEventListener('scroll', () => { 
    
    if (window.scrollY > 50) {
       setTimeout(() => {
          cont.classList.add("hidden")
        header.classList.add("fixed")
        header.classList.remove("relative")
        header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        cont.classList.remove("fixed")
          header.style.marginTop = "0px";
       }, 100);

    }
    else{
   setTimeout(() => {
          cont.classList.remove("hidden")
        cont.classList.add("flex")
        header.classList.remove("fixed")
        header.classList.add("relative")
         header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        header.style.marginTop = "2.4rem";
        cont.classList.add("fixed")
         }, 100);
    }
 })
  const btn = document.getElementById("menu-btn");
  const menu = document.querySelector(".menu-nav");
  const ul = document.querySelectorAll(".ul li a")
  btn.addEventListener("click", () => {
  
         console.log("Menu button clicked");
    menu.classList.toggle("hidden"); 
    menu.classList.toggle("flex");    
    menu.classList.toggle("flex-col");   
})

    ul.forEach((item) => {
    item.addEventListener("click", function () {
         console.log("Menu item clicked");
       this.classList.add("text-primary");
       this.classList.remove("text-gray-100");
         ul.forEach((el) => { 
            if (el !== this) {      
                el.classList.remove("text-primary");
                el.classList.add("text-gray-100");
            }
        });
    });

    })
   
function updateDots() {
  let dots = document.querySelectorAll(".dots");
  let width = window.innerWidth;

  dots.forEach((dot) => {
    let totalDots = 40; // عدد النقط الأصلي
    let visibleDots;

    if (width <= 400) {
      visibleDots = 0; // تختفي خالص
    } else if (width <= 600) {
      visibleDots = 3; // 3 نقط
    } else if (width <= 800) {
      visibleDots = 15; // 5 نقط
    } else {
      visibleDots = totalDots; // كل النقط
    }

    dot.innerHTML = ".".repeat(visibleDots);
  });
}

updateDots();
window.addEventListener("resize", updateDots);
let all =document.querySelector(".all")
let slart =document.querySelector(".starters")
let salad = document.querySelector(".salads")
let special = document.querySelector(".specialty")

let menufilter =[...document.querySelectorAll(".menufilter > *")];
let clonemenu =menufilter  
// starters
let starters= menufilter.filter((food,i)=>{
  let img = food.querySelector("img"); 
   if(/lobster-bisque/i.test(img.src)||/cake/i.test(img.src)||/mozzarella/i.test(img.src)){
    return true;
   }
   return false
 });
 // salads
 let salads = menufilter.filter((food,i)=>{
  let img = food.querySelector("img"); 
   if(/caesar/i.test(img.src)||/greek-salad/i.test(img.src)||/spinach-salad/i.test(img.src)){
    return true;
   }
   return false
 })
// specially 
let specially = menufilter.filter((food,i)=>{
  let img = food.querySelector("img"); 
   if(/bread/i.test(img.src)||/tuscan/i.test(img.src)||/lobster-roll/i.test(img.src)){
    return true;
   }
   return false
 })

 console.log(starters);
 function updateMenu(items) {
  let meniu = document.querySelector(".menufilter");
 
  let currentItems = [...meniu.children];
  currentItems.forEach(el => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 400);
  });
 
  setTimeout(() => {
    items.forEach((el, index) => {
      let clone = el.cloneNode(true);
      clone.classList.add("food-item");
 
      if (index % 2 !== 0) {
        clone.classList.add("left");
      }

      meniu.append(clone);

      // delay staggered
      setTimeout(() => {
        clone.classList.add("show");
      }, index * 200);
    });
  }, 400);
}



all.addEventListener("click", () => updateMenu(clonemenu));
slart.addEventListener("click", () => updateMenu(starters));
salad.addEventListener("click", () => updateMenu(salads));
special.addEventListener("click", () => updateMenu(specially));

let ulfilter=document.querySelectorAll(".ulfilter li")
   ulfilter.forEach((item) => {
    
    item.addEventListener("click", function () {
          
         console.log("Menu item clicked");
       this.classList.add("text-primary");
       this.classList.remove("text-color");
         ulfilter.forEach((el) => { 
            if (el !== this) {      
                el.classList.remove("text-primary");
                el.classList.add("text-color");
            }
        });
    });

    })

  
 
let specialul=document.querySelectorAll(".special li")
   specialul.forEach((item) => {
    
    item.addEventListener("click", function () {
          
         console.log("Menu item clicked");
       this.classList.add("bg-primary");
        this.classList.remove("bg-transparent")
        this.classList.add("border-white");
        this.classList.remove("border-primary")
         specialul.forEach((el) => { 
            if (el !== this) {      
                el.classList.remove("bg-primary");
               el.classList.add("bg-transparent")
                el.classList.add("border-primary");
                el.classList.remove("border-white")
            }
        });
    });

    })

let specialdes =document.querySelector(".specialdes");
let unde = document.querySelector(".unde");
let modi = document.querySelector(".modi");
let pariatur = document.querySelector(".pariatur")
let iusto =document.querySelector(".iusto")
 let nost=document.querySelector(".nost")

function specialsrc(src,h2d,des1,des2){
     let img = specialdes.querySelector("img")
     let h3 =specialdes.querySelector("h3")
     let d1=specialdes.querySelector(".des1")
      let d2=specialdes.querySelector(".des2")
     h3.innerHTML= h2d;
     d2.innerHTML=des2;
     d1.innerHTML=des1;
   img.src= img.src.replace(/specials-\d/,`specials-${src}`)
}

modi.addEventListener("click", () => specialsrc(1,"Architecto ut aperiam autem id","Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka","Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero"));
unde.addEventListener("click", () => specialsrc(2,"Et blanditiis nemo veritatis excepturi","Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka","Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal"));
pariatur.addEventListener("click", () => specialsrc(3,"Impedit facilis occaecati odio neque aperiam sit","Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut","Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae"));
nost.addEventListener("click", () => specialsrc(4,"Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore","Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus","Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore"));
iusto.addEventListener("click", () => specialsrc(5,"Est eveniet ipsam sindera pad rone matrelat sando reda","Omnis blanditiis saepe eos autem qui sunt debitis porro quia.","Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel"));

let eventImg = document.querySelector(".event-img");
let i = 0;
window.onload = () => { i = 1; };
let headerev = ["Birthday Parties", "Private Parties", "Custom Parties"];
let pricearr = ["99", "105", "250"];

let evenHead = document.querySelector(".even-head");
let price = document.querySelector(".priceev");
let img = eventImg.querySelector("img");
let ul2 = document.querySelector(".ul2");
let t2 =document.querySelector(".t2");
let t1 =document.querySelector(".t1");
let dotsr=document.querySelectorAll(".dotsr li");
    img.src = `./img/events-slider-${1}.jpg`;
    evenHead.innerHTML = headerev[0];
    price.innerHTML = "$" + pricearr[0];

dotsr.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    i = index;          
    changeSlide(true);  
  });
});
console.log(dotsr[0])

function changeSlide(manual = false) {
  eventImg.classList.add("slide-out");
  evenHead.classList.add("slide-out");
  price.classList.add("slide-out");
  ul2.classList.add("slide-out");
  t2.classList.add("slide-out");
  t1.classList.add("slide-out");

  setTimeout(() => {
    img.src = `./img/events-slider-${i+1}.jpg`;
    evenHead.innerHTML = headerev[i];
    price.innerHTML = "$" + pricearr[i];

    eventImg.classList.remove("slide-out");
    evenHead.classList.remove("slide-out");
    price.classList.remove("slide-out");
    ul2.classList.remove("slide-out");
    t2.classList.remove("slide-out");
    t1.classList.remove("slide-out");

    eventImg.classList.add("slide-in");
    evenHead.classList.add("slide-in");
    price.classList.add("slide-in");
    ul2.classList.add("slide-in");
    t2.classList.add("slide-in");
    t1.classList.add("slide-in");

    setTimeout(() => {
      eventImg.classList.remove("slide-in");
      evenHead.classList.remove("slide-in");
      price.classList.remove("slide-in");
      ul2.classList.remove("slide-in");
      t2.classList.remove("slide-in");
      t1.classList.remove("slide-in");
    }, 600);

    
    dotsr.forEach(dot => {dot.classList.remove("bg-primary")
        dot.classList.add("bg-gray-400/50")
    });
    dotsr[i].classList.add("bg-primary");

    if (!manual) {  
      i++;
      if (i >= headerev.length) i = 0;
    }
  }, 600);
}

 

setInterval(changeSlide, 5000);
 
 const slider = document.getElementById("slider");
let slides = Array.from(document.querySelectorAll(".slide"));
const dots = document.querySelectorAll(".dot");
const slideInterval = 3000;

 
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

let index = 1; 
let interval;
  
function updateSlider(transition = true) {
  const isLg = window.innerWidth >= 1024;
  const visible = isLg ? 3 : 1;
  const slideWidth = slider.offsetWidth / visible;
 
  slider.style.transition = transition ? "transform 0.5s ease-in-out" : "none";
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  const realSlidesCount = slides.length - 2; 
let dotIndex = (index - 1) % realSlidesCount;
if(dotIndex < 0) dotIndex += realSlidesCount;

 
dotIndex = dotIndex % dots.length;

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-primary", i === dotIndex);
    dot.classList.toggle("bg-transparent", i !== dotIndex);
  });
}

 
function moveNext() {
  const isLg = window.innerWidth >= 1024;
  const visible = isLg ? 3 : 1;

  index++;
  updateSlider();

  slider.addEventListener("transitionend", () => {
    const realSlidesCount = slides.length - 2;

     
    if (index > realSlidesCount) {
      index = 1;  
      updateSlider(false);
    }

     
    if (index <= 0) {
      index = realSlidesCount;
      updateSlider(false);
    }
  }, { once: true });
}

 
function startAuto() {
  interval = setInterval(moveNext, slideInterval);
}

// dots manual control
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    index = i + 1;
    updateSlider();
    startAuto();
  });
});

 
updateSlider();
startAuto();

// responsive
window.addEventListener("resize", () => updateSlider());
let gal = document.querySelector(".gal");
let firstar = document.querySelector(".firstar");
let lastar = document.querySelector(".lastar");
let gallary = [...document.querySelector(".gallery").querySelectorAll("img")];
let currentIndex = 0; 
 
gallary.forEach((el, i) => {
  el.addEventListener("click", () => {
    currentIndex = i; 
    showImage(currentIndex);
  });
});

 
function showImage(index) {
  gal.querySelector("img").src = gallary[index].src;
  gal.classList.remove("hidden");
  gal.classList.add("block");
 
  if (index === 0) {
    firstar.classList.add("text-gray-500");
    firstar.classList.remove("text-white");
    lastar.classList.remove("text-gray-500");
    lastar.classList.add("text-white");
  } 
  else if (index === gallary.length - 1) {
    lastar.classList.add("text-gray-500");
    lastar.classList.remove("text-white");
    firstar.classList.remove("text-gray-500");
    firstar.classList.add("text-white");
  } else {
    
    firstar.classList.add("text-white");
    firstar.classList.remove("text-gray-500");
    lastar.classList.add("text-white");
    lastar.classList.remove("text-gray-500");
  }
}

 
firstar.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
});
 
lastar.addEventListener("click", () => {
  if (currentIndex < gallary.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }
});
 
document.querySelector(".close").addEventListener("click", () => {
  gal.classList.remove("block");
  gal.classList.add("hidden");
});
