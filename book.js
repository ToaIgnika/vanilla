
currentPage = 1;
firstPage = 1;
lastPage = 10;

pageInfo = [
    ["title 1", "Serious doge"],
    ["title 2", "SOVIET RUSSIA"],
    ["title 3", "new RETRO doge"],
    ["title 4", "Dogemperor"],
    ["title 5", "Dangerous"],
    ["title 6", "Serious doge 2"],
    ["title 7", "SOVIET RUSSIA 2"],
    ["title 8", "new RETRO doge 2"],
    ["title 9", "Dogemperor 2"],
    ["title 10", "Dangerous 2"],
]

function setImage() {
    document.getElementById("img_container").src = "img" + currentPage + ".jpg";
}

function setPageInfo() {
    document.title = pageInfo[currentPage - 1][0];
    document.getElementById("header").innerHTML = pageInfo[currentPage - 1][1];
    document.getElementById("page_selector").value = currentPage;
    localStorage.setItem("lastVisitedPage", currentPage);
}

function checkPage() {
    if (currentPage == firstPage) {
        document.getElementById("previous_page").style.display="none";
        document.getElementById("next_page").style.display="inline";
    } else if (currentPage == lastPage) {
        document.getElementById("previous_page").style.display="inline";
        document.getElementById("next_page").style.display="none";
    } else {
        document.getElementById("previous_page").style.display="inline";
        document.getElementById("next_page").style.display="inline";
    }
}

function createPageSelector() {
      //Add the Options to the DropDownList.
      for (var i = 0; i < pageInfo.length; i++) {
        var option = document.createElement("OPTION");

        //Set Customer Name in Text part.
        option.innerHTML = "(" + (i+1) + ") " + pageInfo[i][1];

        //Set CustomerId in Value part.
        option.value = i + 1;

        //Add the Option element to DropDownList.
        document.getElementById("page_selector").options.add(option);
    }
}

function jumpPage() {
    currentPage = parseInt(document.getElementById("page_selector").value);
    setImage();
    setPageInfo();
    checkPage();
}

function loadLastPage() {
    lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage) {
        currentPage = parseInt(lastVisitedPage);
    }
}

loadLastPage();
createPageSelector();
setImage();
setPageInfo();
checkPage();

function previousPage() {
    currentPage -= 1;
    setImage();
    setPageInfo();
    checkPage();
};

function nextPage() {
    currentPage += 1;
    setImage();
    setPageInfo();
    checkPage();
};




