package pl.edu.wat.cticonsumer.core.services;

import static com.google.common.collect.Lists.newArrayList;
import static lombok.AccessLevel.PRIVATE;

import java.util.List;
import java.util.NoSuchElementException;

import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.wat.cticonsumer.core.model.Incident;
import pl.edu.wat.cticonsumer.core.repositories.interfaces.IncidentRepository;
import pl.edu.wat.cticonsumer.core.services.interfaces.IncidentService;

@Service
@FieldDefaults(level = PRIVATE)
public class IncidentServiceImpl implements IncidentService {

	IncidentRepository incidentRepository;

	public IncidentServiceImpl(@Autowired IncidentRepository incidentRepository) {
		this.incidentRepository = incidentRepository;
	}

	@Override
	public Incident findIncident(String id) {
		return incidentRepository.findById(id).orElseThrow(NoSuchElementException::new);
	}

	@Override
	public List<Incident> listIncident() {
		return newArrayList(incidentRepository.findAll());
	}

	@Override
	public String registerIncident(Incident incident) {
		return incidentRepository.save(incident).getId();
	}

	@Override
	public void deleteIncident(String id) {
		incidentRepository.deleteById(id);
	}

}
