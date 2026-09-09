package com.clinicdashboard.clinicdashboard.repository;

import com.clinicdashboard.clinicdashboard.entity.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
}