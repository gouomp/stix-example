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

	public static IncidentBody create(IncidentBodyDto incidentBodyDto) {
		IncidentBody incidentBody = new IncidentBody();
		incidentBody.setType(incidentBodyDto.getType());
		incidentBody.setId(incidentBodyDto.getId());
		incidentBody.setCreated(incidentBodyDto.getCreated());
		incidentBody.setModified(incidentBodyDto.getModified());
		incidentBody.setName(incidentBodyDto.getName());
		incidentBody.setIdentityClass(incidentBodyDto.getIdentityClass());
		incidentBody.setLabels(incidentBodyDto.getLabels());
		incidentBody.setSectors(incidentBodyDto.getSectors());
		incidentBody.setContactInformation(incidentBodyDto.getContactInformation());
		incidentBody.setCreatedByRef(incidentBodyDto.getCreatedByRef());
		incidentBody.setDescription(incidentBodyDto.getDescription());
		incidentBody.setPattern(incidentBodyDto.getPattern());
		incidentBody.setValidFrom(incidentBodyDto.getValidFrom());
		incidentBody.setFirstSeen(incidentBodyDto.getFirstSeen());
		incidentBody.setLastSeen(incidentBodyDto.getLastSeen());
		incidentBody.setCount(incidentBodyDto.getCount());
		incidentBody.setSightingOfRef(incidentBodyDto.getSightingOfRef());
		incidentBody.setWhereSightedRefs(incidentBodyDto.getWhereSightedRefs());
		return incidentBody;
	}

}
