package com.clinicdashboard.clinicdashboard.repository;

import com.clinicdashboard.clinicdashboard.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    long countByDate(String date);

    long countByStatus(String status);
}