package com.clinicdashboard.clinicdashboard.controller;

import com.clinicdashboard.clinicdashboard.entity.Patient;
import com.clinicdashboard.clinicdashboard.repository.PatientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    private final PatientRepository patientRepository;

    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Long id) {
    return patientRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient patient) {
        Patient existingPatient = patientRepository.findById(id).orElseThrow();

        existingPatient.setName(patient.getName());
        existingPatient.setAge(patient.getAge());
        existingPatient.setGender(patient.getGender());
        existingPatient.setPhone(patient.getPhone());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setAddress(patient.getAddress());

        return patientRepository.save(existingPatient);
    }
    @GetMapping("/count")
    public long getPatientCount() {
    return patientRepository.count();
}
@DeleteMapping("/{id}")
public void deletePatient(@PathVariable Long id) {
    patientRepository.deleteById(id);
}
}
