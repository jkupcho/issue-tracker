package issue.tracker.domain;

import issue.tracker.domain.transport.JsonLocalDateDeserializer;
import issue.tracker.domain.transport.JsonLocalDateSerializer;

import org.joda.time.LocalDate;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class Issue {
	private String name;
	private LocalDate opened;
	
	public String getName() {
		return name;
	}
	
	@JsonSerialize(using=JsonLocalDateSerializer.class)
	public LocalDate getOpened() {
		return opened;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	@JsonDeserialize(using=JsonLocalDateDeserializer.class)
	public void setOpened(LocalDate opened) {
		this.opened = opened;
	}
}