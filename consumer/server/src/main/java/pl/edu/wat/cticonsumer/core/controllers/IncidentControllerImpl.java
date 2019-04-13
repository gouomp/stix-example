package pl.edu.wat.cticonsumer.core.controllers;

import static java.util.stream.Collectors.toList;
import static lombok.AccessLevel.PRIVATE;
import static pl.edu.wat.cticonsumer.core.dto.IncidentDto.create;
import static pl.edu.wat.cticonsumer.core.dto.SingleIdDto.create;
import static pl.edu.wat.cticonsumer.core.model.Incident.create;

import java.util.List;

import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.wat.cticonsumer.core.controllers.interfaces.IncidentController;
import pl.edu.wat.cticonsumer.core.dto.IncidentDto;
import pl.edu.wat.cticonsumer.core.dto.SingleIdDto;
import pl.edu.wat.cticonsumer.core.model.Incident;
import pl.edu.wat.cticonsumer.core.services.IncidentServiceImpl;

@RestController
@RequestMapping("/incident")
@FieldDefaults(level = PRIVATE)
public class IncidentControllerImpl implements IncidentController {

	final IncidentServiceImpl incidentServiceImpl;

	public IncidentControllerImpl(@Autowired IncidentServiceImpl incidentServiceImpl) {
		this.incidentServiceImpl = incidentServiceImpl;
	}

	@CrossOrigin
	@GetMapping("/find/{id}")
	public ResponseEntity<IncidentDto> findIncident(@PathVariable String id) {
		Incident incident = incidentServiceImpl.findIncident(id);
		return ResponseEntity.status(200).body(create(incident));

	}

	@CrossOrigin
	@GetMapping("/list")
	public ResponseEntity<List<IncidentDto>> listIncident() {
		List<Incident> incidents = incidentServiceImpl.listIncident();
		return ResponseEntity.status(200).body(incidents.stream()
				.map(IncidentDto::create)
				.collect(toList())
		);
	}

	@CrossOrigin
	@PostMapping("/register")
	public ResponseEntity<SingleIdDto> registerIncident(@RequestBody IncidentDto incidentDto) {
		String id = incidentServiceImpl.registerIncident(create(incidentDto));
		return ResponseEntity.status(201).body(create(id));
	}

	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public void deleteIncident(@PathVariable String id) {
		incidentServiceImpl.deleteIncident(id);
	}

}

