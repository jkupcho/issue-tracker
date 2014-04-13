package issue.tracker.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class IssueTrackerWebApplicationInitializer implements WebApplicationInitializer{

	public void onStartup(ServletContext container) throws ServletException {
		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
		rootContext.register(AppConfig.class);
		
		container.addListener(new ContextLoaderListener(rootContext));
		
		AnnotationConfigWebApplicationContext dispatcherContext = createDispatcherContext(DispatcherConfig.class);
		addDispatcherToServlet(container, dispatcherContext, "dispatcher", "/");
		
		AnnotationConfigWebApplicationContext apiContext = createDispatcherContext(ApiConfig.class);
		addDispatcherToServlet(container, apiContext, "api-servlet", "/api/*");
	}

	private AnnotationConfigWebApplicationContext createDispatcherContext(Class<?> targetConfigClass) {
		AnnotationConfigWebApplicationContext dispatcherContext = new AnnotationConfigWebApplicationContext();
		dispatcherContext.register(targetConfigClass);
		return dispatcherContext;
	}

	private void addDispatcherToServlet(ServletContext container, AnnotationConfigWebApplicationContext dispatcherContext, String servletName, String servletMapping) {
		ServletRegistration.Dynamic dispatcher = container.addServlet(servletName, new DispatcherServlet(dispatcherContext));
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping(servletMapping);
	}

}
