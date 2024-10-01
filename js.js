function calculateskill() {
    var kd = document.getElementById('killdeath').value;
    var wl = document.getElementById('winloss').value;
    var h = document.getElementById('hours').value;
    var wlreal = wl / 100;
    var hc = h / 100
    var skill = kd * wlreal * hc
    var gc = skill / 3
    var roundedskill = Math.round(gc * 100) / 100;
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

