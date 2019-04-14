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
	String identity_class;
	List<String> labels;
	List<String> sectors;
	String contact_information;
	String created_by_ref;
	String description;
	String pattern;
	String valid_from;
	String first_seen;
	String last_seen;
	Integer count;
	String sighting_of_ref;
	List<String> where_sighted_refs;

	public static IncidentBodyDto create(IncidentBody incidentBody) {
		IncidentBodyDto incidentBodyDto = new IncidentBodyDto();
		incidentBodyDto.setType(incidentBody.getType());
		incidentBodyDto.setId(incidentBody.getId());
		incidentBodyDto.setCreated(incidentBody.getCreated());
		incidentBodyDto.setModified(incidentBody.getModified());
		incidentBodyDto.setName(incidentBody.getName());
		incidentBodyDto.setIdentity_class(incidentBody.getIdentity_class());
		incidentBodyDto.setLabels(incidentBody.getLabels());
		incidentBodyDto.setSectors(incidentBody.getSectors());
		incidentBodyDto.setContact_information(incidentBody.getContact_information());
		incidentBodyDto.setCreated_by_ref(incidentBody.getCreated_by_ref());
		incidentBodyDto.setDescription(incidentBody.getDescription());
		incidentBodyDto.setPattern(incidentBody.getPattern());
		incidentBodyDto.setValid_from(incidentBody.getValid_from());
		incidentBodyDto.setFirst_seen(incidentBody.getFirst_seen());
		incidentBodyDto.setLast_seen(incidentBody.getLast_seen());
		incidentBodyDto.setCount(incidentBody.getCount());
		incidentBodyDto.setSighting_of_ref(incidentBody.getSighting_of_ref());
		incidentBodyDto.setWhere_sighted_refs(incidentBody.getWhere_sighted_refs());
		return incidentBodyDto;
	}

}
