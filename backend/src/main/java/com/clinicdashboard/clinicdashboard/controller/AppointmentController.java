
package com.clinicdashboard.clinicdashboard.controller;

import com.clinicdashboard.clinicdashboard.entity.Appointment;
import com.clinicdashboard.clinicdashboard.repository.AppointmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;

    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable Long id) {
        return appointmentRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public Appointment addAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @PutMapping("/{id}")
    public Appointment updateAppointment(
            @PathVariable Long id,
            @RequestBody Appointment appointment) {

        Appointment existingAppointment =
                appointmentRepository.findById(id).orElseThrow();

        existingAppointment.setPatient(appointment.getPatient());
        existingAppointment.setDoctor(appointment.getDoctor());
        existingAppointment.setDate(appointment.getDate());
        existingAppointment.setTime(appointment.getTime());
        existingAppointment.setReason(appointment.getReason());
        existingAppointment.setStatus(appointment.getStatus());

        return appointmentRepository.save(existingAppointment);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        appointmentRepository.deleteById(id);
    }
}
