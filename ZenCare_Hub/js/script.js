const parllel = document.getElementById("parallel_text");

window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    parllel.style.backgroundPositionY = offset * 0.7 + "px";
});


// adding diseases
var diseases = [
    {
      Disease_Name: "COVID-19",
      Cases: "55",
      Symptoms: "Fever, cough, shortness of breath.",
      Prevention: "Wash hands, wear a mask, maintain social distancing."
    },
    {
      Disease_Name: "Tuberculosis(T.B.)",
      Cases: "40",
      Symptoms: "Persistent cough, weight loss, fatigue.",
      Prevention: "Get vaccinated, avoid close contact with TB patients."
    },
    {
      Disease_Name: "Influenza (Flu)",
      Cases: "30",
      Symptoms: "Fever, muscle aches, sore throat.",
      Prevention: "Get a flu vaccine, practice good respiratory hygiene."
    },
    {
      Disease_Name: "Dengue Fever",
      Cases: "20",
      Symptoms: "Severe headache, pain behind the eyes, joint and muscle pain.",
      Prevention: "Eliminate mosquito breeding sites, use mosquito nets."
    },
    {
      Disease_Name: "Malaria",
      Cases: "15",
      Symptoms: "Fever, chills, sweating, fatigue.",
      Prevention: "Use mosquito nets, take antimalarial medications."
    },
    {
      Disease_Name: "Zika Virus",
      Cases: "10",
      Symptoms: "Fever, rash, joint pain, red eyes.",
      Prevention: "Prevent mosquito bites, avoid unprotected sex."
    },
    {
      Disease_Name: "Common Cold",
      Cases: "5",
      Symptoms: "Runny or stuffy nose, sneezing, sore throat.",
      Prevention: "Wash hands frequently, avoid close contact with sick individuals."
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

  diseases.forEach(function (disease) {
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