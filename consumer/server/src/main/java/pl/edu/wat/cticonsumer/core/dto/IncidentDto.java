package pl.edu.wat.cticonsumer.core.dto;

import static java.util.stream.Collectors.toList;
import static lombok.AccessLevel.PRIVATE;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import pl.edu.wat.cticonsumer.core.model.Incident;

@Data
@Getter @Setter
@FieldDefaults(level = PRIVATE)
public class IncidentDto {

	String type;
	String id;
	String specVersion;
	List<IncidentBodyDto> objects;

	public static IncidentDto create(Incident incident) {
		IncidentDto incidentDto = new IncidentDto();
		incidentDto.setType(incident.getType());
		incidentDto.setId(incident.getId());
		incidentDto.setSpecVersion(incident.getSpecVersion());
		incidentDto.setObjects(incident.getObjects()
				.stream()
				.map(IncidentBodyDto::create)
				.collect(toList())
		);
		return incidentDto;
	}

}
