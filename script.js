
// alert("Welcome to PLP Web Dev February Cohort!");


// Readmore Function
let isExpanded = false;

function toggleReadMore() {
    const about = document.getElementById("aboutText");
    const button = document.getElementById("readMoreBtn");

    if (!isExpanded) {
        about.innerHTML = `
            Welcome to an exciting 8-week journey where you'll transform from a coding novice
            to a confident front-end web developer! This hands-on, project-driven course will
            equip you with essential skills to build stunning, responsive, and interactive web pages.
            Get ready to learn and secure your future.
        `;
        alert("You are reading more info");
        button.textContent = "Read Less";
        isExpanded = true;
    } else {
        about.innerHTML = `
            Welcome to an exciting 8-week journey where you'll transform from a coding novice
            to a confident front-end web developer!
        `;
        button.textContent = "Read More";
        isExpanded = false;
    }
    return toggleReadMore()
        
    
}


//Theme Toggle Function
let darkMode = false;
function changeTheme() {
    if (!darkMode) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.body.style.h2 = "#fff"
        document.querySelectorAll("section").forEach(section => {
            section.style.backgroundColor = "#00000";
            section.style.borderRadius = "8px";
            section.style.padding = "10px";
        });
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        
        document.querySelectorAll("section").forEach(section => {
            section.style.backgroundColor = "transparent";
        });
        darkMode = false;
    }
}

// Show/Hide Extra Info
function toggleExtraInfo() {
    const extra = document.getElementById("extrainfo");
    if (extra.style.display === "none") {
        extra.style.display = "block";
    } else {
        extra.style.display = "none";
    }
}


