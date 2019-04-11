package pl.edu.wat.cticonsumer.core.controllers.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import pl.edu.wat.cticonsumer.core.dto.IncidentDto;
import pl.edu.wat.cticonsumer.core.dto.SingleIdDto;

public interface IncidentController {
	ResponseEntity<IncidentDto> findIncident(String id);
	ResponseEntity<List<IncidentDto>> listIncident();
	ResponseEntity<SingleIdDto> registerIncident(IncidentDto incidentDto);
}
