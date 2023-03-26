let p = document.getElementById("para");
let btn = document.getElementById("btn");
let tb = document.getElementById("text_box");
let btn1 = document.getElementById("btn-1");
let l1 = document.getElementById("list1");
let l2 = document.getElementById("list2");
let l3 = document.getElementById("list3");

p.addEventListener('mouseover',()=>{
    p.style.color="red";
})

p.addEventListener('mouseout',()=>{
    p.style.color="black";
})

btn.addEventListener('mouseover',()=>{
    btn.innerHTML="pointing on button";
})

btn.addEventListener('mouseout',()=>{
    btn.innerHTML="not pointing";
})

btn1.addEventListener('click',()=>{
    tb.value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque quae reiciendis,quam nesciunt voluptatem nulla distinctio nihil officia aliquam"
})

l1.addEventListener('mouseover',()=>{
    l1.style.color="red";
    l1.style.fontWeight="bold";
})

l2.addEventListener('mouseover',()=>{
    l2.style.color="red";
    l2.style.fontWeight="bold";

})

l3.addEventListener('mouseover',()=>{
    l3.style.color="red";
    l3.style.fontWeight="bold";

})

l1.addEventListener('mouseout',()=>{
    l1.style.color="black";
    l1.style.fontWeight="normal";
})

l2.addEventListener('mouseout',()=>{
    l2.style.color="black";
    l2.style.fontWeight="normal";

})

l3.addEventListener('mouseout',()=>{
    l3.style.color="black";
    l3.style.fontWeight="normal";

})