package pl.edu.wat.cticonsumer.core.services.interfaces;

import java.util.List;

import pl.edu.wat.cticonsumer.core.model.Incident;

public interface IncidentService {
	Incident findIncident(String id);
	List<Incident> listIncident();
	String registerIncident(Incident incident);
	void deleteIncident(String id);
}
