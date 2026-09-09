package com.clinicdashboard.clinicdashboard.repository;

import com.clinicdashboard.clinicdashboard.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}