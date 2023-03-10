var playBtn = document.querySelector(".bonus__main-wheel-btn"), main = document.querySelector(".bonus__main"),
    wheel = document.querySelector(".bonus__main-wheel-reel"), overlay = document.querySelector(".bonus__overlay"),
    popupFirst = document.querySelector(".bonus__firstWin"),
    popupFirstBtn = document.querySelector(".bonus__firstWin-btn"),
    popupSecond = document.querySelector(".bonus__secondWin"), overflow = document.querySelector("body"),
    wrapper = document.querySelector(".bonus"), bubbleText = document.querySelector(".bonus__main-bubble"),
    triesCounter = 0, babbleTextAfterRotation = "Маeш одну спробу, смертний";

function runFirstRotation() {
    wheel.classList.add("reel-rotation-first"), playBtn.classList.remove("pulse-btn"), playBtn.style.cursor = "default", wrapper.style.pointerEvents = "none", setTimeout(function () {
        doAfterFirstRotation()
    }, 6e3), triesCounter++
}

function doAfterFirstRotation() {
    bubbleText.innerHTML = babbleTextAfterRotation, wheel.style.transform = "rotate(992deg)", wheel.classList.remove("reel-rotation-first"), displayPopup(popupFirst), wrapper.style.pointerEvents = "auto", overflow.style.overflow = "hidden", setTimeout(function () {
        playBtn.classList.add("pulse-btn"), playBtn.style.cursor = "pointer"
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add("reel-rotation-second"), playBtn.classList.remove("pulse-btn"), playBtn.style.cursor = "default", overflow.style.overflow = "hidden", wrapper.style.pointerEvents = "none", setTimeout(function () {
        doAfterSecondRotation()
    }, 6e3), triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond), wrapper.style.pointerEvents = "auto"
}

function displayPopup(e) {
    overlay.classList.remove("opacity-overlay"), e.classList.remove("hide")
}

playBtn.addEventListener("click", function () {
    (0 === triesCounter ? runFirstRotation : runSecondRotation)()
}), popupFirstBtn.addEventListener("click", function () {
    overlay.classList.add("opacity-overlay"), popupFirst.classList.add("hide"), overflow.style.overflow = "unset"
}), function () {
    var e, r = new URL(window.location.href),
        a = ["l", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "param1", "param2"];
    r.searchParams.has("redirectUrl") && 4 === (e = new URL(r.searchParams.get("redirectUrl"))).href.match(/\//g).length && e.searchParams.get("l") && localStorage.setItem("redirectUrl", e.href), a.forEach(function (e) {
        r.searchParams.has(e) && localStorage.setItem(e, r.searchParams.get(e))
    }), ["affid", "cpaid"].forEach(function (e) {
        r.searchParams.has(e) && localStorage.setItem(e, r.searchParams.get(e))
    }), window.addEventListener("click", function (e) {
        var t, o = e.target.closest("a");
        "https://tds.favbet.partners" === o.getAttribute("href") && o && (e.preventDefault(), localStorage.getItem("redirectUrl") ? t = new URL(localStorage.getItem("redirectUrl")) : (t = new URL(o.href), affid = localStorage.getItem("affid"), cpaid = localStorage.getItem("cpaid"), affid && cpaid && (t.pathname = "/" + affid + "/" + cpaid)), a.forEach(function (e) {
            r.searchParams.has(e) && t.searchParams.set(e, localStorage.getItem(e))
        }), document.location.href = t)
    })
}();