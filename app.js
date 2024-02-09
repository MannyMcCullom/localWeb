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

loadCuts(haircuts, 7);

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
    menuItem.classList.add("menuItem")
    const pic = document.createElement("img");
    pic.setAttribute("src", item.picture);
    pic.classList.add("picture");
    menuItem.append(pic);
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
        console.log("cliked:")
        menuItem.classList.add("whiteOut");
        setTimeout(()=>{
            menuItem.classList.remove("whiteOut");
        },250)

    })

    menu.appendChild(menuItem);
}

const header = document.querySelector('#headerContainer');
