package pl.edu.wat.cticonsumer.core.dto;

import static lombok.AccessLevel.PRIVATE;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Data
@Getter @Setter
@FieldDefaults(level = PRIVATE)
public class SingleIdDto {

	String id;

	public static SingleIdDto create(String id) {
		SingleIdDto singleIdDto = new SingleIdDto();
		singleIdDto.setId(id);
		return singleIdDto;
	}

}
