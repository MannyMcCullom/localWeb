// Variables --------------------------------------------
const haircuts = [
    {name: 'fade', picture:"haircut1.jpg"},
    {name: 'fade', picture:"haircut2.jpg"},
];
const menu = document.querySelector("#menuItems");
const mainImage = document.querySelector("#displayedImage");

function loadCuts(arr, num = (arr.length - 1)) {
    console.log(num);
    let count = num;
    while (num >= 0) {
        arr.push({name: "fade", picture:"haircut1.jpg"})
        num--;
    }
}

loadCuts(haircuts, 5);

for (item of haircuts) {
    const menuItem = document.createElement("div");
    const pic = item.picture;
    menuItem.classList.add("menuItem");
    const picEl = document.createElement("img");
    picEl.setAttribute("src", pic);
    picEl.classList.add("picture");
    menuItem.append(picEl);
    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = item.name;
    menuItem.append(text);
    menuItem.addEventListener("mouseenter", ()=>{
        menuItem.classList.toggle("mouseOn");
    })

    menuItem.addEventListener("mouseleave", ()=>{
        menuItem.classList.toggle("mouseOn");
        text.innerHTML = item.name;
    })

    menuItem.addEventListener("click", ()=>{
        changeImage(pic);
        menuItem.classList.add("whiteOut");
        setTimeout(()=>{
            menuItem.classList.remove("whiteOut");
        },250)
    })

    menu.appendChild(menuItem);
}

function changeImage(newImage) {
    mainImage.setAttribute("src", newImage);
}