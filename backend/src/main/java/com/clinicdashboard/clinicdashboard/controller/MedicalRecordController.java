package com.clinicdashboard.clinicdashboard.controller;

import com.clinicdashboard.clinicdashboard.entity.MedicalRecord;
import com.clinicdashboard.clinicdashboard.repository.MedicalRecordRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-records")
public class MedicalRecordController {

    private final MedicalRecordRepository medicalRecordRepository;

    public MedicalRecordController(MedicalRecordRepository medicalRecordRepository) {
        this.medicalRecordRepository = medicalRecordRepository;
    }

    @GetMapping
    public List<MedicalRecord> getAllMedicalRecords() {
        return medicalRecordRepository.findAll();
    }

    @GetMapping("/{id}")
    public MedicalRecord getMedicalRecordById(@PathVariable Long id) {
        return medicalRecordRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public MedicalRecord addMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }

    @PutMapping("/{id}")
    public MedicalRecord updateMedicalRecord(
            @PathVariable Long id,
            @RequestBody MedicalRecord medicalRecord) {

        MedicalRecord existingRecord =
                medicalRecordRepository.findById(id).orElseThrow();

        existingRecord.setPatient(medicalRecord.getPatient());
        existingRecord.setDoctor(medicalRecord.getDoctor());
        existingRecord.setVisitDate(medicalRecord.getVisitDate());
        existingRecord.setSymptoms(medicalRecord.getSymptoms());
        existingRecord.setDiagnosis(medicalRecord.getDiagnosis());
        existingRecord.setPrescription(medicalRecord.getPrescription());

        return medicalRecordRepository.save(existingRecord);
    }
    @DeleteMapping("/{id}")
public void deleteMedicalRecord(@PathVariable Long id) {
    medicalRecordRepository.deleteById(id);
}
}