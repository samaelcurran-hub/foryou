

// =========================
// GET ELEMENTS
// =========================

const screens = document.querySelectorAll(".screen");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const envelope = document.getElementById("envelope");


// =========================
// SCREEN TRANSITIONS
// =========================

function changeScreen(screenId) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================
// YES BUTTON + AUTO MUSIC
// =========================

function showLetter() {

    changeScreen("envelopeScreen");

    // Automatically play music

    music.play().then(() => {

        musicBtn.innerHTML = "❚❚ Pause Music";

    }).catch(() => {

        musicBtn.innerHTML = "♫ Play Music";

    });

}


// =========================
// NO BUTTON
// =========================

function showNo() {

    changeScreen("noScreen");

}


// =========================
// GO BACK
// =========================

function goBack() {

    changeScreen("welcome");

}


// =========================
// OPEN ENVELOPE
// =========================

let envelopeOpened = false;

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    // Add opening animation

    envelope.classList.add("open");

    // Wait for envelope animation

    setTimeout(() => {

        changeScreen("openedScreen");

        envelopeOpened = false;

    }, 1800);

}


// =========================
// READ FULL LETTER
// =========================

function readLetter() {

    changeScreen("finalScreen");

}


// =========================
// MUSIC PLAYER
// =========================

function toggleMusic() {

    if (music.paused) {

        music.play().then(() => {

            musicBtn.innerHTML = "❚❚ Pause Music";

        });

    } else {

        music.pause();

        musicBtn.innerHTML = "♫ Play Music";

    }

}


// =========================
// MUSIC BUTTON STATUS
// =========================

music.addEventListener("play", () => {

    musicBtn.innerHTML = "❚❚ Pause Music";

});

music.addEventListener("pause", () => {

    musicBtn.innerHTML = "♫ Play Music";

});
