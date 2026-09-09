package com.clinicdashboard.clinicdashboard.repository;

import com.clinicdashboard.clinicdashboard.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}