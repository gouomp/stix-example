package pl.edu.wat.cticonsumer.core.model;

import static lombok.AccessLevel.PRIVATE;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.data.redis.core.RedisHash;
import pl.edu.wat.cticonsumer.core.dto.IncidentBodyDto;

@Data
@Getter @Setter
@RedisHash("IncidentBody")
@FieldDefaults(level = PRIVATE)
public class IncidentBody {

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

	public static IncidentBody create(IncidentBodyDto incidentBodyDto) {
		IncidentBody incidentBody = new IncidentBody();
		incidentBody.setType(incidentBodyDto.getType());
		incidentBody.setId(incidentBodyDto.getId());
		incidentBody.setCreated(incidentBodyDto.getCreated());
		incidentBody.setModified(incidentBodyDto.getModified());
		incidentBody.setName(incidentBodyDto.getName());
		incidentBody.setIdentity_class(incidentBodyDto.getIdentity_class());
		incidentBody.setLabels(incidentBodyDto.getLabels());
		incidentBody.setSectors(incidentBodyDto.getSectors());
		incidentBody.setContact_information(incidentBodyDto.getContact_information());
		incidentBody.setCreated_by_ref(incidentBodyDto.getCreated_by_ref());
		incidentBody.setDescription(incidentBodyDto.getDescription());
		incidentBody.setPattern(incidentBodyDto.getPattern());
		incidentBody.setValid_from(incidentBodyDto.getValid_from());
		incidentBody.setFirst_seen(incidentBodyDto.getFirst_seen());
		incidentBody.setLast_seen(incidentBodyDto.getLast_seen());
		incidentBody.setCount(incidentBodyDto.getCount());
		incidentBody.setSighting_of_ref(incidentBodyDto.getSighting_of_ref());
		incidentBody.setWhere_sighted_refs(incidentBodyDto.getWhere_sighted_refs());
		return incidentBody;
	}

}
