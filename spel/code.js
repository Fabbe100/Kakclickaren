let countCookies = document.getElementById('coockies'); // Corrected ID name
let btnCookie = document.getElementById('cclicker'); // Corrected ID name
let upgradeBtn = document.getElementById('doubble');
let myuppgrade = document.getElementById('uppgrade');
let upgradeCostSpan = document.getElementById('upgradeCost');

let count = 0;
let doubleEnabled = false;

btnCookie.addEventListener('click', cookieIncrement);
let upgradeLevel = 1;

btnCookie.addEventListener('click', cookieIncrement);
upgradeBtn.addEventListener('click', upgradeIncrement);

function cookieIncrement() {
    count += upgradeLevel;
    countCookies.innerHTML = "Kakor : " + count;
}

function upgradeIncrement() {
    let upgradeCost = parseInt(upgradeCostSpan.textContent);
    if (count >= upgradeCost) {
        upgradeLevel++; // Increment the upgrade level by 1
        myuppgrade.innerHTML = "Clicks per click : " + upgradeLevel;
        count -= upgradeCost;
        countCookies.innerHTML = "Kakor : " + count;
        upgradeCostSpan.textContent = 10 * upgradeLevel; // Update upgrade cost text
    }
}