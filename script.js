// ===== Dark Mode =====

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}


// ===== Smart Search =====

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {

    function searchSubject() {
        const noResult = document.getElementById("noResult");

if(noResult){
    noResult.style.display = "none";
}

        let value = searchInput.value.trim().toLowerCase();

        if (value === "html") {
            window.location.href = "html-notes.html";
        }

        else if (value === "css") {
            window.location.href = "css-notes.html";
        }

        else if (value === "javascript" || value === "js" || value === "java script") {
            window.location.href = "javascript-notes.html";
        }

        else if (value === "react") {
            window.location.href = "react-notes.html";
        }

        else if (value === "ai" || value === "artificial intelligence") {
            window.location.href = "artificial-intelligence.html";
        }

        else if (value === "database" || value === "dbms") {
            window.location.href = "database.html";
        }

       else {

    const noResult = document.getElementById("noResult");

    if(noResult){

        noResult.style.display = "block";

        noResult.scrollIntoView({

            behavior:"smooth",
            block:"center"

        });

    }

}

    }

    searchBtn.addEventListener("click", searchSubject);

    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            searchSubject();
        }
    });

}

// ===== Back To Top =====

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (document.documentElement.scrollTop > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}