package issue.tracker.api;

import issue.tracker.api.service.IssueService;
import issue.tracker.domain.Issue;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/issue")
public class IssueController {
	
	@Autowired
	private IssueService issueService;

	@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Collection<Issue> getIssues() {
		return issueService.getIssues();
	}
	
	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Issue addIssue(@RequestBody Issue issue) {
		issueService.addIssue(issue);
		return issue;
	}
	
	@RequestMapping(value="/save", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Issue save(@RequestBody Issue issue) {
		Issue savedIssue = issueService.save(issue);
		return savedIssue;		
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Issue getIssues(@PathVariable Integer id) {
		return issueService.getIssue(id);
	}
	
}
