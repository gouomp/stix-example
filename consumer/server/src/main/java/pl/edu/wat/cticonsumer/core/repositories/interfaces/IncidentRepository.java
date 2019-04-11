package pl.edu.wat.cticonsumer.core.repositories.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.edu.wat.cticonsumer.core.model.Incident;

@Repository
public interface IncidentRepository extends CrudRepository<Incident, String> {}
