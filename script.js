function calculateCarbon() {
    let carKm = Number(document.getElementById("carKm").value);
    let electricity = Number(document.getElementById("electricity").value);

    let carbon = (carKm * 0.21 * 30) + (electricity * 0.5);

    document.getElementById("result").innerHTML =
        "Estimated Carbon Footprint: " +
        carbon.toFixed(2) +
        " kg CO₂/month";

    let tip = "";

    if (carbon < 100) {
        tip = "🌱 Great job! Your carbon footprint is low.";
    } else if (carbon < 200) {
        tip = "💡 Try using public transport more often.";
    } else {
        tip = "⚠️ High footprint. Consider reducing car usage and electricity consumption.";
    }

    document.getElementById("tip").innerHTML = tip;

    let percentage = Math.min(carbon / 3, 100);
    document.getElementById("bar").style.width = percentage + "%";

    if (carbon < 100) {
        document.getElementById("bar").style.background = "green";
    } else if (carbon < 200) {
        document.getElementById("bar").style.background = "orange";
    } else {
        document.getElementById("bar").style.background = "red";
    }
    let badge = "";

if (carbon < 100) {
    badge = "🏅 Eco Hero";
} else if (carbon < 200) {
    badge = "🌿 Eco Starter";
} else {
    badge = "⚠️ Carbon Reducer Needed";
}

document.getElementById("badge").innerHTML = badge;
}