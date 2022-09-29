function init_topbar() {
    const topbars = document.getElementsByClassName("top-bar");
    if (topbars.length > 1) throw new Error("ne legyen tobb topbar testverem kerlek");

    const topbar = topbars[0];
}

init_topbar()