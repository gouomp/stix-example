package pl.edu.wat.cticonsumer.core.dto;

import static lombok.AccessLevel.PRIVATE;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import pl.edu.wat.cticonsumer.core.model.IncidentBody;

@Data
@Getter @Setter
@FieldDefaults(level = PRIVATE)
public class IncidentBodyDto {

	String type;
	String id;
	String created;
	String modified;
	String name;
	String identityClass;
	List<String> labels;
	List<String> sectors;
	String contactInformation;
	String createdByRef;
	String description;
	String pattern;
	String validFrom;
	String firstSeen;
	String lastSeen;
	Integer count;
	String sightingOfRef;
	List<String> whereSightedRefs;

	public static IncidentBodyDto create(IncidentBody incidentBody) {
		IncidentBodyDto incidentBodyDto = new IncidentBodyDto();
		incidentBodyDto.setType(incidentBody.getType());
		incidentBodyDto.setId(incidentBody.getId());
		incidentBodyDto.setCreated(incidentBody.getCreated());
		incidentBodyDto.setModified(incidentBody.getModified());
		incidentBodyDto.setName(incidentBody.getName());
		incidentBodyDto.setIdentityClass(incidentBody.getIdentityClass());
		incidentBodyDto.setLabels(incidentBody.getLabels());
		incidentBodyDto.setSectors(incidentBody.getSectors());
		incidentBodyDto.setContactInformation(incidentBody.getContactInformation());
		incidentBodyDto.setCreatedByRef(incidentBody.getCreatedByRef());
		incidentBodyDto.setDescription(incidentBody.getDescription());
		incidentBodyDto.setPattern(incidentBody.getPattern());
		incidentBodyDto.setValidFrom(incidentBody.getValidFrom());
		incidentBodyDto.setFirstSeen(incidentBody.getFirstSeen());
		incidentBodyDto.setLastSeen(incidentBody.getLastSeen());
		incidentBodyDto.setCount(incidentBody.getCount());
		incidentBodyDto.setSightingOfRef(incidentBody.getSightingOfRef());
		incidentBodyDto.setWhereSightedRefs(incidentBody.getWhereSightedRefs());
		return incidentBodyDto;
	}

}
