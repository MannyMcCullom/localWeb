// Variables --------------------------------------------
const haircuts = [
    {name: 'fade', picture:"haircut1.jpg"},
    {name: 'fade', picture:"haircut2.jpg"},
];

function loadCuts(arr, num = 0) {
    let count = num;
    while (num >= 1) {
        arr.push({name: 'fade', picture:"haircut1.jpg"})
        num--;
    }
}

loadCuts(haircuts, 17);

const title = document.querySelector(".headerContainer");
title.addEventListener("click", ()=>{
    console.log("clicked:", title.innerHTML);
    location.reload();
})
title.addEventListener("mouseenter", ()=>{
    console.log("entered:")
    // title.classList.toggle("pointer");
    // title.classList.toggle("whiteOut");
    title.classList.toggle("mouseOn");

})

title.addEventListener("mouseleave", ()=>{
    console.log("left:")
    // title.classList.toggle("pointer");
    // title.classList.toggle("whiteOut");
    title.classList.toggle("mouseOn");

})

const menu = document.querySelector("#menuItems");

for (item of haircuts) {
    const menuItem = document.createElement("div");
    const pic = item.picture;
    menuItem.classList.add("menuItem")
    const picEl = document.createElement("img");
    picEl.setAttribute("src", pic);
    picEl.classList.add("picture");
    menuItem.append(picEl);
    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = item.name;
    menuItem.append(text);

    menuItem.addEventListener("mouseenter", ()=>{
        console.log("entered:")
        // menuItem.classList.toggle("pointer");
        // menuItem.classList.toggle("whiteOut");
        menuItem.classList.toggle("mouseOn");
    })

    menuItem.addEventListener("mouseleave", ()=>{
        console.log("left:")
        // menuItem.classList.toggle("pointer");
        // menuItem.classList.toggle("whiteOut");
        menuItem.classList.toggle("mouseOn");
        text.innerHTML = item.name;
    })

    menuItem.addEventListener("click", ()=>{
        changeImage(pic);
        console.log("cliked:")
        menuItem.classList.add("whiteOut");
        setTimeout(()=>{
            menuItem.classList.remove("whiteOut");
        },250)
        console.log(pic);
    })

    menu.appendChild(menuItem);
}

const header = document.querySelector('#headerContainer');

const mainImage = document.querySelector("#displayedImage");
function changeImage(newImage) {
    mainImage.setAttribute("src", newImage);
} 
changeImage("haircut2.jpg");