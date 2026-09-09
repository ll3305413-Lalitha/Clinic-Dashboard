// ================= NAVIGATION =================

const addPatientButton = document.getElementById("addPatientButton");

if (addPatientButton) {
    addPatientButton.addEventListener("click", function () {
        window.location.href = "patient.html";
    });
}

const viewPatientsButton = document.getElementById("viewPatientsButton");

if (viewPatientsButton) {
    viewPatientsButton.addEventListener("click", function () {
        window.location.href = "patients.html";
    });
}

const addDoctorButton = document.getElementById("addDoctorButton");

if (addDoctorButton) {
    addDoctorButton.addEventListener("click", function () {
        window.location.href = "doctor.html";
    });
}

const viewDoctorsButton = document.getElementById("viewDoctorsButton");

if (viewDoctorsButton) {
    viewDoctorsButton.addEventListener("click", function () {
        window.location.href = "doctors.html";
    });
}

const addAppointmentButton =
    document.getElementById("addAppointmentButton");

if (addAppointmentButton) {
    addAppointmentButton.addEventListener("click", function () {
        window.location.href = "appointment.html";
    });
}

const viewAppointmentsButton =
    document.getElementById("viewAppointmentsButton");

if (viewAppointmentsButton) {
    viewAppointmentsButton.addEventListener("click", function () {
        window.location.href = "appointments.html";
    });
}

const addMedicalRecordButton =
    document.getElementById("addMedicalRecordButton");

if (addMedicalRecordButton) {
    addMedicalRecordButton.addEventListener("click", function () {
        window.location.href = "medical-record.html";
    });
}

const viewMedicalRecordsButton =
    document.getElementById("viewMedicalRecordsButton");

if (viewMedicalRecordsButton) {
    viewMedicalRecordsButton.addEventListener("click", function () {
        window.location.href = "medical-records.html";
    });
}

const backButton = document.getElementById("backButton");

if (backButton) {
    backButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}


// ================= PATIENT =================

const savePatientButton =
    document.getElementById("savePatientButton");

if (savePatientButton) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const patientId =
        urlParams.get("id");

    if (patientId) {

        fetch(
            "http://localhost:8080/api/patients/" + patientId
        )
            .then(response => response.json())
            .then(patient => {

                document.getElementById("patientName").value =
                    patient.name;

                document.getElementById("patientAge").value =
                    patient.age;

                document.getElementById("patientGender").value =
                    patient.gender;

                document.getElementById("patientPhone").value =
                    patient.phone;

                document.getElementById("patientEmail").value =
                    patient.email;

                document.getElementById("patientAddress").value =
                    patient.address;

                document.getElementById("patientBloodGroup").value =
                    patient.bloodGroup;

                savePatientButton.textContent =
                    "Update Patient";
            })
            .catch(error => {

                console.error(error);

                alert("Could not load patient information.");
            });
    }

    savePatientButton.addEventListener(
        "click",
        async function () {

            const patient = {

                name:
                    document.getElementById("patientName").value,

                age:
                    document.getElementById("patientAge").value,

                gender:
                    document.getElementById("patientGender").value,

                phone:
                    document.getElementById("patientPhone").value,

                email:
                    document.getElementById("patientEmail").value,

                address:
                    document.getElementById("patientAddress").value,

                bloodGroup:
                    document.getElementById("patientBloodGroup").value
            };

            try {

                let response;

                if (patientId) {

                    response = await fetch(
                        "http://localhost:8080/api/patients/" +
                        patientId,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(patient)
                        }
                    );

                } else {

                    response = await fetch(
                        "http://localhost:8080/api/patients",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(patient)
                        }
                    );
                }

                if (response.ok) {

                    if (patientId) {

                        alert(
                            "Patient updated successfully!"
                        );

                        window.location.href =
                            "patients.html";

                    } else {

                        alert(
                            "Patient saved successfully!"
                        );

                        document.getElementById(
                            "patientName"
                        ).value = "";

                        document.getElementById(
                            "patientAge"
                        ).value = "";

                        document.getElementById(
                            "patientGender"
                        ).value = "";

                        document.getElementById(
                            "patientPhone"
                        ).value = "";

                        document.getElementById(
                            "patientEmail"
                        ).value = "";

                        document.getElementById(
                            "patientAddress"
                        ).value = "";

                        document.getElementById(
                            "patientBloodGroup"
                        ).value = "";
                    }

                } else {

                    alert("Failed to save patient.");
                }

            } catch (error) {

                console.error(error);

                alert(
                    "Could not connect to the backend."
                );
            }
        }
    );
}


// ================= DOCTOR =================

const saveDoctorButton =
    document.getElementById("saveDoctorButton");

if (saveDoctorButton) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const doctorId =
        urlParams.get("id");

    if (doctorId) {

        fetch(
            "http://localhost:8080/api/doctors/" +
            doctorId
        )
            .then(response => response.json())
            .then(doctor => {

                document.getElementById(
                    "doctorName"
                ).value = doctor.name;

                document.getElementById(
                    "doctorSpecialization"
                ).value = doctor.specialization;

                document.getElementById(
                    "doctorPhone"
                ).value = doctor.phone;

                document.getElementById(
                    "doctorEmail"
                ).value = doctor.email;

                document.getElementById(
                    "doctorAvailability"
                ).value = doctor.availability;

                saveDoctorButton.textContent =
                    "Update Doctor";
            })
            .catch(error => {

                console.error(error);

                alert(
                    "Could not load doctor information."
                );
            });
    }

    saveDoctorButton.addEventListener(
        "click",
        async function () {

            const doctor = {

                name:
                    document.getElementById(
                        "doctorName"
                    ).value,

                specialization:
                    document.getElementById(
                        "doctorSpecialization"
                    ).value,

                phone:
                    document.getElementById(
                        "doctorPhone"
                    ).value,

                email:
                    document.getElementById(
                        "doctorEmail"
                    ).value,

                availability:
                    document.getElementById(
                        "doctorAvailability"
                    ).value
            };

            try {

                let response;

                if (doctorId) {

                    response = await fetch(
                        "http://localhost:8080/api/doctors/" +
                        doctorId,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(doctor)
                        }
                    );

                } else {

                    response = await fetch(
                        "http://localhost:8080/api/doctors",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(doctor)
                        }
                    );
                }

                if (response.ok) {

                    if (doctorId) {

                        alert(
                            "Doctor updated successfully!"
                        );

                        window.location.href =
                            "doctors.html";

                    } else {

                        alert(
                            "Doctor saved successfully!"
                        );

                        document.getElementById(
                            "doctorName"
                        ).value = "";

                        document.getElementById(
                            "doctorSpecialization"
                        ).value = "";

                        document.getElementById(
                            "doctorPhone"
                        ).value = "";

                        document.getElementById(
                            "doctorEmail"
                        ).value = "";

                        document.getElementById(
                            "doctorAvailability"
                        ).value = "";
                    }

                } else {

                    alert("Failed to save doctor.");
                }

            } catch (error) {

                console.error(error);

                alert(
                    "Could not connect to the backend."
                );
            }
        }
    );
}


// ================= APPOINTMENT =================

const saveAppointmentButton =
    document.getElementById(
        "saveAppointmentButton"
    );

if (saveAppointmentButton) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const appointmentId =
        urlParams.get("id");

    if (appointmentId) {

        fetch(
            "http://localhost:8080/api/appointments/" +
            appointmentId
        )
            .then(response => response.json())
            .then(appointment => {

                document.getElementById(
                    "appointmentPatient"
                ).value = appointment.patient;

                document.getElementById(
                    "appointmentDoctor"
                ).value = appointment.doctor;

                document.getElementById(
                    "appointmentDate"
                ).value = appointment.date;

                document.getElementById(
                    "appointmentTime"
                ).value = appointment.time;

                document.getElementById(
                    "appointmentReason"
                ).value = appointment.reason;

                document.getElementById(
                    "appointmentStatus"
                ).value = appointment.status;

                saveAppointmentButton.textContent =
                    "Update Appointment";
            })
            .catch(error => {

                console.error(error);

                alert(
                    "Could not load appointment information."
                );
            });
    }

    saveAppointmentButton.addEventListener(
        "click",
        async function () {

            const appointment = {

                patient:
                    document.getElementById(
                        "appointmentPatient"
                    ).value,

                doctor:
                    document.getElementById(
                        "appointmentDoctor"
                    ).value,

                date:
                    document.getElementById(
                        "appointmentDate"
                    ).value,

                time:
                    document.getElementById(
                        "appointmentTime"
                    ).value,

                reason:
                    document.getElementById(
                        "appointmentReason"
                    ).value,

                status:
                    document.getElementById(
                        "appointmentStatus"
                    ).value
            };

            try {

                let response;

                if (appointmentId) {

                    response = await fetch(
                        "http://localhost:8080/api/appointments/" +
                        appointmentId,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(
                                    appointment
                                )
                        }
                    );

                } else {

                    response = await fetch(
                        "http://localhost:8080/api/appointments",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(
                                    appointment
                                )
                        }
                    );
                }

                if (response.ok) {

                    if (appointmentId) {

                        alert(
                            "Appointment updated successfully!"
                        );

                        window.location.href =
                            "appointments.html";

                    } else {

                        alert(
                            "Appointment saved successfully!"
                        );

                        document.getElementById(
                            "appointmentPatient"
                        ).value = "";

                        document.getElementById(
                            "appointmentDoctor"
                        ).value = "";

                        document.getElementById(
                            "appointmentDate"
                        ).value = "";

                        document.getElementById(
                            "appointmentTime"
                        ).value = "";

                        document.getElementById(
                            "appointmentReason"
                        ).value = "";

                        document.getElementById(
                            "appointmentStatus"
                        ).value = "";
                    }

                } else {

                    alert(
                        "Failed to save appointment."
                    );
                }

            } catch (error) {

                console.error(error);

                alert(
                    "Could not connect to the backend."
                );
            }
        }
    );
}


// ================= MEDICAL RECORD =================

const saveMedicalRecordButton =
    document.getElementById(
        "saveMedicalRecordButton"
    );

if (saveMedicalRecordButton) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const medicalRecordId =
        urlParams.get("id");

    if (medicalRecordId) {

        fetch(
            "http://localhost:8080/api/medical-records/" +
            medicalRecordId
        )
            .then(response => response.json())
            .then(record => {

                document.getElementById(
                    "recordPatient"
                ).value = record.patient;

                document.getElementById(
                    "recordDoctor"
                ).value = record.doctor;

                document.getElementById(
                    "recordVisitDate"
                ).value = record.visitDate;

                document.getElementById(
                    "recordSymptoms"
                ).value = record.symptoms;

                document.getElementById(
                    "recordDiagnosis"
                ).value = record.diagnosis;

                document.getElementById(
                    "recordPrescription"
                ).value = record.prescription;

                saveMedicalRecordButton.textContent =
                    "Update Medical Record";
            })
            .catch(error => {

                console.error(error);

                alert(
                    "Could not load medical record information."
                );
            });
    }

    saveMedicalRecordButton.addEventListener(
        "click",
        async function () {

            const medicalRecord = {

                patient:
                    document.getElementById(
                        "recordPatient"
                    ).value,

                doctor:
                    document.getElementById(
                        "recordDoctor"
                    ).value,

                visitDate:
                    document.getElementById(
                        "recordVisitDate"
                    ).value,

                symptoms:
                    document.getElementById(
                        "recordSymptoms"
                    ).value,

                diagnosis:
                    document.getElementById(
                        "recordDiagnosis"
                    ).value,

                prescription:
                    document.getElementById(
                        "recordPrescription"
                    ).value
            };

            try {

                let response;

                if (medicalRecordId) {

                    response = await fetch(
                        "http://localhost:8080/api/medical-records/" +
                        medicalRecordId,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(
                                    medicalRecord
                                )
                        }
                    );

                } else {

                    response = await fetch(
                        "http://localhost:8080/api/medical-records",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body:
                                JSON.stringify(
                                    medicalRecord
                                )
                        }
                    );
                }

                if (response.ok) {

                    if (medicalRecordId) {

                        alert(
                            "Medical record updated successfully!"
                        );

                        window.location.href =
                            "medical-records.html";

                    } else {

                        alert(
                            "Medical record saved successfully!"
                        );

                        document.getElementById(
                            "recordPatient"
                        ).value = "";

                        document.getElementById(
                            "recordDoctor"
                        ).value = "";

                        document.getElementById(
                            "recordVisitDate"
                        ).value = "";

                        document.getElementById(
                            "recordSymptoms"
                        ).value = "";

                        document.getElementById(
                            "recordDiagnosis"
                        ).value = "";

                        document.getElementById(
                            "recordPrescription"
                        ).value = "";
                    }

                } else {

                    alert(
                        "Failed to save medical record."
                    );
                }

            } catch (error) {

                console.error(error);

                alert(
                    "Could not connect to the backend."
                );
            }
        }
    );
}


// ================= PATIENT LIST + SEARCH + DELETE =================

const patientList =
    document.getElementById("patientList");

const patientSearch =
    document.getElementById("patientSearch");

if (patientList) {

    fetch(
        "http://localhost:8080/api/patients"
    )
        .then(response => response.json())
        .then(patients => {

            function displayPatients(filteredPatients) {

                if (filteredPatients.length === 0) {

                    patientList.innerHTML =
                        "<p>No patients found.</p>";

                    return;
                }

                patientList.innerHTML = "";

                filteredPatients.forEach(patient => {

                    const patientCard =
                        document.createElement("div");

                    patientCard.className =
                        "patient-card";

                    patientCard.innerHTML = `
                        <h3>${patient.name}</h3>

                        <p>
                            <strong>Patient ID:</strong>
                            ${patient.id}
                        </p>

                        <p>
                            <strong>Age:</strong>
                            ${patient.age}
                        </p>

                        <p>
                            <strong>Gender:</strong>
                            ${patient.gender}
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            ${patient.phone}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            ${patient.email}
                        </p>

                        <p>
                            <strong>Address:</strong>
                            ${patient.address}
                        </p>

                        <p>
                            <strong>Blood Group:</strong>
                            ${patient.bloodGroup}
                        </p>

                        <button
                            class="edit-patient-button"
                            data-id="${patient.id}">
                            Edit Patient
                        </button>

                        <button
                            class="delete-patient-button"
                            data-id="${patient.id}">
                            Delete Patient
                        </button>
                    `;

                    patientList.appendChild(
                        patientCard
                    );
                });

                const editButtons =
                    document.querySelectorAll(
                        ".edit-patient-button"
                    );

                editButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        function () {

                            const patientId =
                                this.getAttribute(
                                    "data-id"
                                );

                            window.location.href =
                                "patient.html?id=" +
                                patientId;
                        }
                    );
                });

                const deleteButtons =
                    document.querySelectorAll(
                        ".delete-patient-button"
                    );

                deleteButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        async function () {

                            const patientId =
                                this.getAttribute(
                                    "data-id"
                                );

                            const confirmed =
                                confirm(
                                    "Are you sure you want to delete this patient?"
                                );

                            if (!confirmed) {
                                return;
                            }

                            try {

                                const response =
                                    await fetch(
                                        "http://localhost:8080/api/patients/" +
                                        patientId,
                                        {
                                            method: "DELETE"
                                        }
                                    );

                                if (response.ok) {

                                    alert(
                                        "Patient deleted successfully!"
                                    );

                                    const index =
                                        patients.findIndex(
                                            patient =>
                                                patient.id ==
                                                patientId
                                        );

                                    if (index !== -1) {
                                        patients.splice(
                                            index,
                                            1
                                        );
                                    }

                                    displayPatients(
                                        patients
                                    );

                                } else {

                                    alert(
                                        "Failed to delete patient."
                                    );
                                }

                            } catch (error) {

                                console.error(error);

                                alert(
                                    "Could not connect to the backend."
                                );
                            }
                        }
                    );
                });
            }

            displayPatients(patients);

            if (patientSearch) {

                patientSearch.addEventListener(
                    "input",
                    function () {

                        const searchText =
                            this.value
                                .toLowerCase()
                                .trim();

                        const filteredPatients =
                            patients.filter(
                                patient =>
                                    patient.name
                                        .toLowerCase()
                                        .includes(
                                            searchText
                                        )
                            );

                        displayPatients(
                            filteredPatients
                        );
                    }
                );
            }
        })
        .catch(error => {

            console.error(error);

            patientList.innerHTML =
                "<p>Could not load patients.</p>";
        });
}


// ================= DOCTOR LIST + SEARCH + DELETE =================

const doctorList =
    document.getElementById("doctorList");

const doctorSearch =
    document.getElementById("doctorSearch");

if (doctorList) {

    fetch(
        "http://localhost:8080/api/doctors"
    )
        .then(response => response.json())
        .then(doctors => {

            function displayDoctors(filteredDoctors) {

                if (filteredDoctors.length === 0) {

                    doctorList.innerHTML =
                        "<p>No doctors found.</p>";

                    return;
                }

                doctorList.innerHTML = "";

                filteredDoctors.forEach(doctor => {

                    const doctorCard =
                        document.createElement("div");

                    doctorCard.className =
                        "doctor-card";

                    doctorCard.innerHTML = `
                        <h3>${doctor.name}</h3>

                        <p>
                            <strong>Doctor ID:</strong>
                            ${doctor.id}
                        </p>

                        <p>
                            <strong>Specialization:</strong>
                            ${doctor.specialization}
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            ${doctor.phone}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            ${doctor.email}
                        </p>

                        <p>
                            <strong>Availability:</strong>
                            ${doctor.availability}
                        </p>

                        <button
                            class="edit-doctor-button"
                            data-id="${doctor.id}">
                            Edit Doctor
                        </button>

                        <button
                            class="delete-doctor-button"
                            data-id="${doctor.id}">
                            Delete Doctor
                        </button>
                    `;

                    doctorList.appendChild(
                        doctorCard
                    );
                });

                const editButtons =
                    document.querySelectorAll(
                        ".edit-doctor-button"
                    );

                editButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        function () {

                            const doctorId =
                                this.getAttribute(
                                    "data-id"
                                );

                            window.location.href =
                                "doctor.html?id=" +
                                doctorId;
                        }
                    );
                });

                const deleteButtons =
                    document.querySelectorAll(
                        ".delete-doctor-button"
                    );

                deleteButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        async function () {

                            const doctorId =
                                this.getAttribute(
                                    "data-id"
                                );

                            const confirmed =
                                confirm(
                                    "Are you sure you want to delete this doctor?"
                                );

                            if (!confirmed) {
                                return;
                            }

                            try {

                                const response =
                                    await fetch(
                                        "http://localhost:8080/api/doctors/" +
                                        doctorId,
                                        {
                                            method: "DELETE"
                                        }
                                    );

                                if (response.ok) {

                                    alert(
                                        "Doctor deleted successfully!"
                                    );

                                    const index =
                                        doctors.findIndex(
                                            doctor =>
                                                doctor.id ==
                                                doctorId
                                        );

                                    if (index !== -1) {
                                        doctors.splice(
                                            index,
                                            1
                                        );
                                    }

                                    displayDoctors(
                                        doctors
                                    );

                                } else {

                                    alert(
                                        "Failed to delete doctor."
                                    );
                                }

                            } catch (error) {

                                console.error(error);

                                alert(
                                    "Could not connect to the backend."
                                );
                            }
                        }
                    );
                });
            }

            displayDoctors(doctors);

            if (doctorSearch) {

                doctorSearch.addEventListener(
                    "input",
                    function () {

                        const searchText =
                            this.value
                                .toLowerCase()
                                .trim();

                        const filteredDoctors =
                            doctors.filter(
                                doctor =>
                                    doctor.name
                                        .toLowerCase()
                                        .includes(
                                            searchText
                                        )
                            );

                        displayDoctors(
                            filteredDoctors
                        );
                    }
                );
            }
        })
        .catch(error => {

            console.error(error);

            doctorList.innerHTML =
                "<p>Could not load doctors.</p>";
        });
}


// ================= APPOINTMENT LIST + SEARCH + DELETE =================

const appointmentList =
    document.getElementById("appointmentList");

const appointmentSearch =
    document.getElementById("appointmentSearch");

if (appointmentList) {

    fetch(
        "http://localhost:8080/api/appointments"
    )
        .then(response => response.json())
        .then(appointments => {

            function displayAppointments(
                filteredAppointments
            ) {

                if (filteredAppointments.length === 0) {

                    appointmentList.innerHTML =
                        "<p>No appointments found.</p>";

                    return;
                }

                appointmentList.innerHTML = "";

                filteredAppointments.forEach(
                    appointment => {

                        const appointmentCard =
                            document.createElement("div");

                        appointmentCard.className =
                            "appointment-card";

                        appointmentCard.innerHTML = `
                            <h3>
                                Appointment #${appointment.id}
                            </h3>

                            <p>
                                <strong>Patient:</strong>
                                ${appointment.patient}
                            </p>

                            <p>
                                <strong>Doctor:</strong>
                                ${appointment.doctor}
                            </p>

                            <p>
                                <strong>Date:</strong>
                                ${appointment.date}
                            </p>

                            <p>
                                <strong>Time:</strong>
                                ${appointment.time}
                            </p>

                            <p>
                                <strong>Reason:</strong>
                                ${appointment.reason}
                            </p>

                            <p>
                                <strong>Status:</strong>
                                ${appointment.status}
                            </p>

                            <button
                                class="edit-appointment-button"
                                data-id="${appointment.id}">
                                Edit Appointment
                            </button>

                            <button
                                class="delete-appointment-button"
                                data-id="${appointment.id}">
                                Delete Appointment
                            </button>
                        `;

                        appointmentList.appendChild(
                            appointmentCard
                        );
                    }
                );

                const editButtons =
                    document.querySelectorAll(
                        ".edit-appointment-button"
                    );

                editButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        function () {

                            const appointmentId =
                                this.getAttribute(
                                    "data-id"
                                );

                            window.location.href =
                                "appointment.html?id=" +
                                appointmentId;
                        }
                    );
                });

                const deleteButtons =
                    document.querySelectorAll(
                        ".delete-appointment-button"
                    );

                deleteButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        async function () {

                            const appointmentId =
                                this.getAttribute(
                                    "data-id"
                                );

                            const confirmed =
                                confirm(
                                    "Are you sure you want to delete this appointment?"
                                );

                            if (!confirmed) {
                                return;
                            }

                            try {

                                const response =
                                    await fetch(
                                        "http://localhost:8080/api/appointments/" +
                                        appointmentId,
                                        {
                                            method: "DELETE"
                                        }
                                    );

                                if (response.ok) {

                                    alert(
                                        "Appointment deleted successfully!"
                                    );

                                    const index =
                                        appointments.findIndex(
                                            appointment =>
                                                appointment.id ==
                                                appointmentId
                                        );

                                    if (index !== -1) {
                                        appointments.splice(
                                            index,
                                            1
                                        );
                                    }

                                    displayAppointments(
                                        appointments
                                    );

                                } else {

                                    alert(
                                        "Failed to delete appointment."
                                    );
                                }

                            } catch (error) {

                                console.error(error);

                                alert(
                                    "Could not connect to the backend."
                                );
                            }
                        }
                    );
                });
            }

            displayAppointments(appointments);

            if (appointmentSearch) {

                appointmentSearch.addEventListener(
                    "input",
                    function () {

                        const searchText =
                            this.value
                                .toLowerCase()
                                .trim();

                        const filteredAppointments =
                            appointments.filter(
                                appointment =>
                                    appointment.patient
                                        .toLowerCase()
                                        .includes(
                                            searchText
                                        ) ||
                                    appointment.doctor
                                        .toLowerCase()
                                        .includes(
                                            searchText
                                        )
                            );

                        displayAppointments(
                            filteredAppointments
                        );
                    }
                );
            }
        })
        .catch(error => {

            console.error(error);

            appointmentList.innerHTML =
                "<p>Could not load appointments.</p>";
        });
}


// ================= MEDICAL RECORD LIST + DELETE =================

const medicalRecordList =
    document.getElementById(
        "medicalRecordList"
    );

if (medicalRecordList) {

    fetch(
        "http://localhost:8080/api/medical-records"
    )
        .then(response => response.json())
        .then(records => {

            function displayMedicalRecords(
                filteredRecords
            ) {

                if (filteredRecords.length === 0) {

                    medicalRecordList.innerHTML =
                        "<p>No medical records found.</p>";

                    return;
                }

                medicalRecordList.innerHTML = "";

                filteredRecords.forEach(record => {

                    const recordCard =
                        document.createElement("div");

                    recordCard.className =
                        "medical-record-card";

                    recordCard.innerHTML = `
                        <h3>
                            Medical Record #${record.id}
                        </h3>

                        <p>
                            <strong>Patient:</strong>
                            ${record.patient}
                        </p>

                        <p>
                            <strong>Doctor:</strong>
                            ${record.doctor}
                        </p>

                        <p>
                            <strong>Visit Date:</strong>
                            ${record.visitDate}
                        </p>

                        <p>
                            <strong>Symptoms:</strong>
                            ${record.symptoms}
                        </p>

                        <p>
                            <strong>Diagnosis:</strong>
                            ${record.diagnosis}
                        </p>

                        <p>
                            <strong>Prescription / Notes:</strong>
                            ${record.prescription}
                        </p>

                        <button
                            class="edit-medical-record-button"
                            data-id="${record.id}">
                            Edit Medical Record
                        </button>

                        <button
                            class="delete-medical-record-button"
                            data-id="${record.id}">
                            Delete Medical Record
                        </button>
                    `;

                    medicalRecordList.appendChild(
                        recordCard
                    );
                });

                const editButtons =
                    document.querySelectorAll(
                        ".edit-medical-record-button"
                    );

                editButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        function () {

                            const recordId =
                                this.getAttribute(
                                    "data-id"
                                );

                            window.location.href =
                                "medical-record.html?id=" +
                                recordId;
                        }
                    );
                });

                const deleteButtons =
                    document.querySelectorAll(
                        ".delete-medical-record-button"
                    );

                deleteButtons.forEach(button => {

                    button.addEventListener(
                        "click",
                        async function () {

                            const recordId =
                                this.getAttribute(
                                    "data-id"
                                );

                            const confirmed =
                                confirm(
                                    "Are you sure you want to delete this medical record?"
                                );

                            if (!confirmed) {
                                return;
                            }

                            try {

                                const response =
                                    await fetch(
                                        "http://localhost:8080/api/medical-records/" +
                                        recordId,
                                        {
                                            method: "DELETE"
                                        }
                                    );

                                if (response.ok) {

                                    alert(
                                        "Medical record deleted successfully!"
                                    );

                                    const index =
                                        records.findIndex(
                                            record =>
                                                record.id ==
                                                recordId
                                        );

                                    if (index !== -1) {
                                        records.splice(
                                            index,
                                            1
                                        );
                                    }

                                    displayMedicalRecords(
                                        records
                                    );

                                } else {

                                    alert(
                                        "Failed to delete medical record."
                                    );
                                }

                            } catch (error) {

                                console.error(error);

                                alert(
                                    "Could not connect to the backend."
                                );
                            }
                        }
                    );
                });
            }

            displayMedicalRecords(records);
        })
        .catch(error => {

            console.error(error);

            medicalRecordList.innerHTML =
                "<p>Could not load medical records.</p>";
        });
}


// ================= DASHBOARD STATISTICS =================

const totalPatients =
    document.getElementById("totalPatients");

const totalDoctors =
    document.getElementById("totalDoctors");

const todayAppointments =
    document.getElementById("todayAppointments");

const completedAppointments =
    document.getElementById(
        "completedAppointments"
    );

const pendingAppointments =
    document.getElementById(
        "pendingAppointments"
    );


if (totalPatients) {

    fetch(
        "http://localhost:8080/api/patients"
    )
        .then(response => response.json())
        .then(patients => {

            totalPatients.textContent =
                patients.length;
        })
        .catch(error => {

            console.error(error);
        });
}


if (totalDoctors) {

    fetch(
        "http://localhost:8080/api/doctors"
    )
        .then(response => response.json())
        .then(doctors => {

            totalDoctors.textContent =
                doctors.length;
        })
        .catch(error => {

            console.error(error);
        });
}


if (
    todayAppointments ||
    completedAppointments ||
    pendingAppointments
) {

    fetch(
        "http://localhost:8080/api/appointments"
    )
        .then(response => response.json())
        .then(appointments => {

            const today =
                new Date()
                    .toISOString()
                    .split("T")[0];

            const todayList =
                appointments.filter(
                    appointment =>
                        appointment.date === today
                );

            const completedList =
                appointments.filter(
                    appointment =>
                        appointment.status ===
                        "Completed"
                );

            const pendingList =
                appointments.filter(
                    appointment =>
                        appointment.status ===
                        "Scheduled"
                );

            if (todayAppointments) {

                todayAppointments.textContent =
                    todayList.length;
            }

            if (completedAppointments) {

                completedAppointments.textContent =
                    completedList.length;
            }

            if (pendingAppointments) {

                pendingAppointments.textContent =
                    pendingList.length;
            }
        })
        .catch(error => {

            console.error(error);
        });
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = "index.html";
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert("Unable to connect to the server.");
        }
    });
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const username = document.getElementById("registerUsername").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: fullName,
                    username: username,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                window.location.href = "login.html";
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert("Unable to connect to the server.");
        }
    });
}