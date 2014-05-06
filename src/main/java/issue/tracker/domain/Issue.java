package issue.tracker.domain;

import issue.tracker.domain.transport.JsonLocalDateDeserializer;
import issue.tracker.domain.transport.JsonLocalDateSerializer;

import java.util.HashSet;
import java.util.Set;

import org.joda.time.LocalDate;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class Issue {
	
	private Integer id;
	private String name;
	private LocalDate opened;
	private LocalDate closed;
	
	private Set<Comment> comments = new HashSet<Comment>();

	public Issue() {
		setId(hashCode());
	}
	
	public Integer getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	@JsonSerialize(using=JsonLocalDateSerializer.class)
	public LocalDate getOpened() {
		return opened;
	}
	
	@JsonSerialize(using=JsonLocalDateSerializer.class)
	public LocalDate getClosed() {
		return closed;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	@JsonDeserialize(using=JsonLocalDateDeserializer.class)
	public void setOpened(LocalDate opened) {
		this.opened = opened;
	}
	
	@JsonDeserialize(using=JsonLocalDateDeserializer.class)
	public void setClosed(LocalDate closed) {
		this.closed = closed;
	}
}