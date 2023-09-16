document.getElementById("calculate").addEventListener("click", calculateAge);

document.getElementById("calculateOption").addEventListener("click", calculateOption);

function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    const ageInMilliseconds = today - birthdate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    document.getElementById("result").innerHTML = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
}

