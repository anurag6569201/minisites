const parllel = document.getElementById("parallel_text");

window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    parllel.style.backgroundPositionY = offset * 0.7 + "px";
});


// adding diseases
var sparkLifeDiseases = [
  {
    Disease_Name: "Hypertension",
    Cases: "25",
    Symptoms: "High blood pressure, headaches, chest pain.",
    Prevention: "Maintain a healthy diet, exercise regularly, manage stress."
  },
  {
    Disease_Name: "Type 2 Diabetes",
    Cases: "18",
    Symptoms: "Frequent urination, increased thirst, unexplained weight loss.",
    Prevention: "Eat a balanced diet, exercise, monitor blood sugar levels."
  },
  {
    Disease_Name: "Asthma",
    Cases: "12",
    Symptoms: "Shortness of breath, wheezing, chest tightness.",
    Prevention: "Avoid triggers, take prescribed medications, use inhalers."
  },
  {
    Disease_Name: "Heart Disease",
    Cases: "8",
    Symptoms: "Chest pain, shortness of breath, fatigue.",
    Prevention: "Eat a heart-healthy diet, exercise, quit smoking."
  },
  {
    Disease_Name: "Osteoporosis",
    Cases: "6",
    Symptoms: "Bone pain, fractures, loss of height.",
    Prevention: "Consume calcium-rich foods, engage in weight-bearing exercises."
  },
  {
    Disease_Name: "Depression",
    Cases: "3",
    Symptoms: "Persistent sadness, loss of interest, changes in sleep patterns.",
    Prevention: "Seek therapy, maintain a support network, engage in self-care."
  }
];

  function createDiseaseTableRow(disease) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = disease.Disease_Name;

    var caseCell = document.createElement("td");
    caseCell.textContent = disease.Cases;

    var symptomsCell = document.createElement("td");
    symptomsCell.textContent = disease.Symptoms;

    var preventionCell = document.createElement("td");
    preventionCell.textContent = disease.Prevention;

    row.appendChild(nameCell);
    row.appendChild(caseCell);
    row.appendChild(symptomsCell);
    row.appendChild(preventionCell);

    return row;
  }

  // Populate disease table dynamically
  var diseaseTableBody = document.getElementById("disease-table-body");

  sparkLifeDiseases.forEach(function (disease) {
    var diseaseTableRow = createDiseaseTableRow(disease);
    diseaseTableBody.appendChild(diseaseTableRow);
  });


  // loader
const loader = document.getElementById("loader");
window.addEventListener('load', () => {
  setTimeout(() => {
    var isWebkit = 'WebkitAppearance' in document.documentElement.style;
    if (isWebkit) {
      var styleElement = document.createElement('style');
      styleElement.textContent = "::-webkit-scrollbar { width: 12px; }";
      document.head.appendChild(styleElement);
    }
    loader.style.display = "none";
  }, 2000);
});