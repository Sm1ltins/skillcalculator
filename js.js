function calculateskill() {
    var kd = document.getElementById('killdeath').value;
    var wl = document.getElementById('winloss').value;
    var hs = document.getElementById('headshots').value;
    var wlreal = wl / 100;
    var hsreal = hs / 100;
    var skill = +kd + +wlreal + +hsreal;
    var skill1 = skill / 3;
    var roundedskill = Math.round(skill1 * 100) / 100;
    document.getElementById('result').textContent = "Skill: " + roundedskill;
}

function enforceMinMax(el) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }

