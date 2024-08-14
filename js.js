function calculateskill() {
    var kd = document.getElementById('killdeath').value;
    var wl = document.getElementById('winloss').value;
    var hs = document.getElementById('headshots').value;
    var skill = +kd + +wl + +hs;
    var skill1 = skill / 3;
    var roundedskill = Math.round(skill1 * 100) / 100;
    document.getElementById('result').textContent = "Skill: " + roundedskill;
}

