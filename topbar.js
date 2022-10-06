let topbar = null;
let topbarIcon = null;
let topbarItems = null;
let hiddenBurger = true;

const mediaQuery = matchMedia("(max-width: 768px)");
mediaQuery.onchange = e => {
    if (e.matches) {
        // smaller
        updateTopbarState();
    } else {
        // bigger
        topbarItems.style.display = "flex";
    }
};

function init_topbar() {
    const topbars = document.getElementsByClassName("top-bar");
    if (topbars.length > 1) throw new Error("ne legyen tobb topbar testverem kerlek");

    topbarIcon = document.getElementsByClassName("top-bar__icon")[0];
    topbar = topbars[0];
    topbarItems = document.getElementsByClassName("top-bar__items")[0];

    topbarIcon.addEventListener("click", click);

    if (mediaQuery.matches) {
        updateTopbarState();
    }
}

function updateTopbarState() {
    if (!!topbarItems) {
        topbarItems.style.display = hiddenBurger ? "none" : "flex";
    }
}

function click() {
    hiddenBurger = !hiddenBurger;
    updateTopbarState();
}

init_topbar()
