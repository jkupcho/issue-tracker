package issue.tracker.api.service;

import issue.tracker.domain.Issue;

import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;

import org.joda.time.LocalDate;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;

@Service
public class MapIssueService implements IssueService, InitializingBean {

	private ConcurrentHashMap<Issue, Boolean> issues = new ConcurrentHashMap<Issue, Boolean>();
	
	@Override
	public Collection<Issue> getIssues() {
		return issues.keySet();
	}
	
	@Override
	public void addIssue(Issue issue) {
		issues.put(issue, true);
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		Issue issue = new Issue();
		issue.setName("ETL Problem");
		issue.setOpened(LocalDate.now());
		issues.put(issue, true);
	}

}
