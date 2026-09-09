package com.clinicdashboard.clinicdashboard.controller;

import com.clinicdashboard.clinicdashboard.entity.Doctor;
import com.clinicdashboard.clinicdashboard.repository.DoctorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    private final DoctorRepository doctorRepository;

    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        return doctorRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {

        Doctor existingDoctor =
                doctorRepository.findById(id).orElseThrow();

        existingDoctor.setName(doctor.getName());
        existingDoctor.setSpecialization(doctor.getSpecialization());
        existingDoctor.setPhone(doctor.getPhone());
        existingDoctor.setEmail(doctor.getEmail());
        existingDoctor.setAvailability(doctor.getAvailability());

        return doctorRepository.save(existingDoctor);
    }
    @GetMapping("/count")
    public long getDoctorCount() {
    return doctorRepository.count();
}
@DeleteMapping("/{id}")
public void deleteDoctor(@PathVariable Long id) {
    doctorRepository.deleteById(id);
}
}
