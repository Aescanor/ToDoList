const blockToDOList = document.querySelector(".todolist-block");
const taskInput = document.querySelector("input#tasks");
const alert = document.querySelector("p.alert");
const taskList = document.querySelector(".tasksList");
const addTaskButton = document.querySelector("button.addTask");


// 1.a - Ajout d'un event sur bouton 
addTaskButton.addEventListener("click", () => {

    // 1.b - Focus sur l'input:
    taskInput.focus();

    // 1.c - Récupération de la data de l'input:
    let dataInput = taskInput.value;

    // 1.d - Gestion de la saisie de l'input:

    if (dataInput === "") {
        alert.textContent ="veuillez saisir des caractéres valides";
        return "";

    }

    // 2 - Création des éléments : 

    // 2.a - Création des listes :
    let newLi = document.createElement("li");
    newLi.classList = "task";
    newLi.innerHTML = `${dataInput}`;

    // 2.b - Ajout dans le DOM :
    taskList.appendChild(newLi);


    // 3 - Status:

    // 3.a - inProgress :
    let inProgress = document.createElement("input");
    inProgress.type = "checkbox";
    inProgress.className = "inProgress";
    inProgress.id = "status";
    inProgress.name = "status";
    inProgress.value = "InProgress";

    // création du texte de l'input :
    let textInProgress = document.createTextNode("En cours");

    //3.b - Ajout dans le DOM :
    newLi.appendChild(inProgress);
    newLi.appendChild(textInProgress);

    // 3.c - Achieved: 
    let Achieved = document.createElement("input");
    Achieved.type = "checkbox";
    Achieved.className = "achieved";
    Achieved.id = "status";
    Achieved.name = "status";
    Achieved.value = "achieved";

    // création du texte de l'input :
    let textAchieved = document.createTextNode("Terminé");

    // 3.d - Ajout dans le DOM :
    newLi.appendChild(Achieved);
    newLi.appendChild(textAchieved);

    // 4-Gestion des états des checkboxs:

    // Déclaration de la variable de l'input checkbox: 
    let labelInprogress = document.createElement("label");

    // Déclaration de la variable de l'input checkbox: 
    let labelAchieved = document.createElement("label");

    // function change()
    inProgress.addEventListener("change", () => {

        if (inProgress.checked = true) {
            // disabled the other checkbox :
            Achieved.checked = false;

            // création du label :
            labelInprogress.textContent = "en cours";
            labelInprogress.style.color = "orange";

            newLi.appendChild(labelInprogress);
            labelAchieved.remove();

        } else {
            labelInprogress.remove();
            labelAchieved.remove();
        }

    })

    // function change()
    Achieved.addEventListener("change", () => {

        if (Achieved.checked = true) {;
            inProgress.checked = false;

            // création du label :
            labelAchieved.textContent = "terminé";
            labelAchieved.style.color = "green";

            newLi.appendChild(labelAchieved);
            labelInprogress.remove();

        } else {
            labelInprogress.remove();
            labelAchieved.remove();
        }

    })

    // 4 - Suppression 

    // 4.a - Création du bouton suppr:
    let btnSuppr = document.createElement("button");
    // Attribution d'une classe :
    btnSuppr.className = "btnSuppr";
    // Attribution du contenu:
    btnSuppr.textContent = "Supprimer";


    // 4.b - Ajout dans le DOM :
    newLi.appendChild(btnSuppr);

    // 4.c - function suppression 
    btnSuppr.addEventListener("click", () => {
        newLi.remove();
        btnSuppr.remove();
    })

    // 5.Clear taskInput :
    taskInput.value = "";

    // 6 - Button btnSupprAll:

    // 6.a déclaration du btn :
    let btnSupprAll = document.querySelector("button.btnSupprAll");

    // 6.b function toggle du btn :
    function togglebtnSupprAll() {

        return (newLi ? btnSupprAll.style.visibility = "visible" : btnSupprAll.style.visibility = "hidden");

    }
    togglebtnSupprAll();


    // 6.c - function de suppression de tous les newli (tasks)

    btnSupprAll.addEventListener("click", () => {

        // vide le contnu de la lsite taskList:
        taskList.innerHTML = "";

        // retire le bouton btnSupprAll:
        btnSupprAll.remove();

        // refresh la page :
        location.reload();
    })
})