package issue.tracker.api.service;

import issue.tracker.domain.Issue;

import java.util.Collection;

public interface IssueService {
	
	Collection<Issue> getIssues();
	Issue getIssue(Integer issueId);
	void addIssue(Issue issue);
	Issue save(Issue issue);

}
