const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);

const btn = document.getElementById("btn")

const addDay = () => {
    const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Esse dia já foi adicionado!")
        return
    }
    nlwSetup.addDay(today)
}

const saveData = () => {
    localStorage.setItem("NLWSetupHabits", JSON.stringify(nlwSetup.data))
    console.log(nlwSetup.data);
}

btn.addEventListener("click", addDay)
form.addEventListener("change", saveData)

const completedHabits = JSON.parse(localStorage.getItem("NLWSetupHabits")) || {}

nlwSetup.setData(completedHabits);
nlwSetup.load()
