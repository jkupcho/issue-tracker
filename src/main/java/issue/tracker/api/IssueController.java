package issue.tracker.api;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller("/issue/")
public class IssueController {

	@RequestMapping(method=RequestMethod.GET, produces=MediaType.TEXT_PLAIN_VALUE)
	@ResponseBody
	public String getIssues() {
		return "[" +
					"{\"name\" : \"testing\"}" +
				"]";
	}
	
}
