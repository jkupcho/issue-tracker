package issue.tracker.api.service;

import issue.tracker.domain.Issue;

import java.util.Collection;

public interface IssueService {
	
	Collection<Issue> getIssues();
	void addIssue(Issue issue);

}
