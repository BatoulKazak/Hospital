const
    DISEASE_INFO_MODAL = document.querySelector("#disease-info-modal"),
    DISEASE_BUTTONS = document.querySelectorAll("#medical-specialties-container button"),
    SUBMIT_BUTTON = document.querySelector("#disease-info-modal button[type=submit]"),
    SECTIONS = document.querySelectorAll("#disease-info-modal>section"),
    TEXTAREA = document.querySelector("#disease-info-modal textarea"),
    MEDICAL_SPECIALTIES_CONTAINER = document.querySelector("#medical-specialties-container"),
    DOCTOR_INFORMATION = document.querySelector("#doctor-information"),
    DOCTOR_NAME = document.querySelector("#doctor-name"),
    DOCTOR_INFO = document.querySelector("#doctor-info"),
    DOCTOR_TIME_ATTENDANCE = document.querySelector("#doctor-time-attendance"),
    DOCTOR_BOOKED = document.querySelector("#booked"),
    CLOSE_DOCTOR_INFORMATION_CONTAINER = document.querySelector("#close");

var shownSectionIndex = 0;
let specialties = "";

function showDiseaseInfoModal() {
    DISEASE_INFO_MODAL.classList.remove("hidden");
}

DISEASE_BUTTONS.forEach(diseaseButton => {
    diseaseButton.addEventListener("click", () => {
        // DISEASE_INFO_MODAL.classList.remove("hidden");
        // DISEASE_INFO_MODAL.classList.add("animate");

        switch (diseaseButton.innerText) {
            case "Cardiology": specialties = "cardiology"; Doctors(specialties); break;
            case "Neurology": specialties = "neurology"; Doctors(specialties); break;
            case "Ophthalmology": specialties = "ophthalmology"; Doctors(specialties); break;
            case "Otolaryngology": specialties = "otolaryngology"; Doctors(specialties); break;
            case "Orthopedics": specialties = "orthopedics"; Doctors(specialties); break;
            case "Oncology": specialties = "oncology"; Doctors(specialties); break;
            case "Dermatology": specialties = "dermatology"; Doctors(specialties); break;
            case "Pulmonology": specialties = "pulmonology"; Doctors(specialties); break;
            case "Pediatrics": specialties = "pediatrics"; Doctors(specialties); break;
        }
    });
});

DISEASE_INFO_MODAL?.addEventListener("submit", e => {
    e.preventDefault();

    shownSectionIndex++;

    SECTIONS.forEach((section, i) => {
        section.className = i != shownSectionIndex ? "hidden" : "";
    });
});

DISEASE_INFO_MODAL?.addEventListener("reset", e => {
    e.preventDefault();

    SECTIONS[shownSectionIndex].querySelector("textarea").value = "";

    shownSectionIndex--;

    SECTIONS.forEach((section, i) => {
        section.className = i != shownSectionIndex ? "hidden" : "";
    });
});

function Doctors() {
    MEDICAL_SPECIALTIES_CONTAINER.innerHTML = ""
    let numberOfDoctors;
    const DOCTORS_SURNAMES = ["Ahmad", "Olivia", "John", "Alaa", "Ameer", "Noor", "Fatina", "Emily", "Fatima", "Sophia", "Khaled", "Samia", "Sami"],
        DOCTORS_FAMILIES_NAMES = ["Müller", "Schmidt", "Schneider", "Fischer", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Bauer"];

    let dontRepeatSurNameWithTheSameFamilyName = [];
    //we must order this code (switch) and put it in a function 
    switch (specialties) {
        case specialties = "cardiology": numberOfDoctors = 10; break;
        case specialties = "neurology": numberOfDoctors = 11; break;
        case specialties = "ophthalmology": numberOfDoctors = 5; break;
        case specialties = "otolaryngology": numberOfDoctors = 15; break;
        case specialties = "orthopedics": numberOfDoctors = 9; break;
        case specialties = "oncology": numberOfDoctors = 7; break;
        case specialties = "dermatology": numberOfDoctors = 7; break;
        case specialties = "pulmonology": numberOfDoctors = 7; break;
        case specialties = "pediatrics": numberOfDoctors = 7; break;
    }

    for (let i = 0; i < numberOfDoctors + 1; i++) {
        let randomDoctorSurnames = DOCTORS_SURNAMES[Math.floor(Math.random() * DOCTORS_SURNAMES.length)],
            randomDoctorsFamiliesNames = DOCTORS_FAMILIES_NAMES[Math.floor(Math.random() * DOCTORS_FAMILIES_NAMES.length)];


        if (dontRepeatSurNameWithTheSameFamilyName.includes(randomDoctorSurnames + " " + randomDoctorsFamiliesNames)) {
            randomDoctorsFamiliesNames = DOCTORS_SURNAMES[Math.floor(Math.random() * DOCTORS_SURNAMES.length)];
        }

        dontRepeatSurNameWithTheSameFamilyName.push(randomDoctorSurnames + " " + randomDoctorsFamiliesNames);

        const SPECIALTIES_BUTTON = document.createElement("button");
        SPECIALTIES_BUTTON.className = "specialties-buttons";
        SPECIALTIES_BUTTON.textContent = randomDoctorSurnames + " " + randomDoctorsFamiliesNames;
        MEDICAL_SPECIALTIES_CONTAINER.appendChild(SPECIALTIES_BUTTON);

        if (i == numberOfDoctors) {
            const MAIN_BUTTON = document.createElement("button");
            MAIN_BUTTON.id = "main";
            MAIN_BUTTON.className = "specialties-buttons";
            MAIN_BUTTON.innerText = "Main";
            MEDICAL_SPECIALTIES_CONTAINER.appendChild(MAIN_BUTTON);

            MAIN_BUTTON.addEventListener("click", e => {
                location.reload();
            });
        }
    }

    const DOCTORS_BUTTONS = MEDICAL_SPECIALTIES_CONTAINER.querySelectorAll("button"),
        DOCTOR_TIME_ATTENDANCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    DOCTORS_BUTTONS.forEach((button) => {
        button.addEventListener("click", () => {

            if (button.id == "main") {
                DOCTOR_INFORMATION.classList.add("hidden");
                MEDICAL_SPECIALTIES_CONTAINER.classList.remove("hidden");
                return;
            }
            //here i want to put a different values for each doctor info
            //the problem is JUST in these variables 

            let doctorName = button.innerText,
                doctorInfo = button.innerText.toLowerCase() + "studied in Germany\nat Berlin University",
                workingHours = DOCTOR_TIME_ATTENDANCE[Math.floor(Math.random() * DOCTOR_TIME_ATTENDANCE.length)];
            //let IsBooked = ["booked", "avaliable"].Math.floor(Math.random() * 2);
            // let IsBooked = "true";

            doctorInfoContainer();
            giveInfoForDoctor(doctorName, doctorInfo, workingHours);
        });
    });
}

function doctorInfoContainer() {
    DOCTOR_INFORMATION.classList.remove("hidden");
    // DISEASE_INFO_MODAL.classList.add("animate");
}//19701970

function giveInfoForDoctor(doctorName, doctorInfo, workingHours) {

    DOCTOR_NAME.innerText = "Name: " + doctorName;
    DOCTOR_INFO.innerText = "Doctor Info: " + doctorInfo;
    DOCTOR_TIME_ATTENDANCE.innerText = "Working hours: " + workingHours;

    // const BOLD_NAME = DOCTOR_NAME.substring(0, 5).style.fontWeight = "bold",
    //     BOLD_INFO = DOCTOR_INFO.substring(0, 11).style.fontWeight = "bold",
    //     BOLD_TIME_ATTENDANCE = DOCTOR_TIME_ATTENDANCE.substring(0, 13).style.fontWeight = "bold";
    // if (IsBooked) {
    //     DOCTOR_BOOKED.innerText = "booked";
    //     DOCTOR_BOOKED.className = "booked";
    // }
    // else {
    //     DOCTOR_BOOKED.innerText = "available";
    //     DOCTOR_BOOKED.className = "available";
    // }
}

CLOSE_DOCTOR_INFORMATION_CONTAINER.addEventListener("click", e => {
    DOCTOR_INFORMATION.classList.add("hidden");
});
