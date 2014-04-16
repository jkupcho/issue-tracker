package issue.tracker.api.service;

import issue.tracker.domain.Issue;

import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;

import org.joda.time.LocalDate;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;

@Service
public class MapIssueService implements IssueService, InitializingBean {

	private ConcurrentHashMap<Integer, Issue> issues = new ConcurrentHashMap<Integer, Issue>();
	
	@Override
	public Collection<Issue> getIssues() {
		return issues.values();
	}
	
	@Override
	public void addIssue(Issue issue) {
		issues.put(issue.hashCode(), issue);
	}
	
	@Override
	public Issue getIssue(Integer id) {
		return issues.get(id);
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		Issue openIssue = new Issue();
		openIssue.setName("ETL Problem");
		openIssue.setOpened(LocalDate.now());
		issues.put(openIssue.hashCode(), openIssue);
		

		Issue closedIssue = new Issue();
		closedIssue.setName("TNT Problem");
		closedIssue.setOpened(LocalDate.now());
		closedIssue.setClosed(LocalDate.now());
		issues.put(closedIssue.hashCode(), closedIssue);
	}

	@Override
	public Issue save(Issue issue) {
		Issue issueToSave = issues.get(issue.getId());
		issueToSave.setClosed(LocalDate.now());
		return issueToSave;
	}

}
