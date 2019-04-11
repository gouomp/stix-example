package pl.edu.wat.cticonsumer.core.model;

import static java.util.stream.Collectors.toList;
import static lombok.AccessLevel.PRIVATE;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.data.redis.core.RedisHash;
import pl.edu.wat.cticonsumer.core.dto.IncidentDto;

@Data
@Getter @Setter
@RedisHash("Incident")
@FieldDefaults(level = PRIVATE)
public class Incident {

	String type;
	String id;
	String specVersion;
	List<IncidentBody> objects;

	public static Incident create(IncidentDto incidentDto) {
		Incident incident = new Incident();
		incident.setType(incidentDto.getType());
		incident.setId(incidentDto.getId());
		incident.setSpecVersion(incidentDto.getSpecVersion());
		incident.setObjects(incidentDto.getObjects()
				.stream()
				.map(IncidentBody::create)
				.collect(toList())
		);
		return incident;
	}
}
