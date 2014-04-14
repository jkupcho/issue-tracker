package issue.tracker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableWebMvc
@Configuration
class DispatcherConfig extends WebMvcConfigurerAdapter {
	
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("**/*.html").addResourceLocations("/static/");
		registry.addResourceHandler("**/*.map").addResourceLocations("/static/");
		registry.addResourceHandler("**/*.tff").addResourceLocations("/static/");
		registry.addResourceHandler("**/*.woff").addResourceLocations("/static/");
		registry.addResourceHandler("**/*.svg").addResourceLocations("/static/");
		registry.addResourceHandler("**/*.css").addResourceLocations("/static/");
		registry.addResourceHandler("**/*.js").addResourceLocations("/static/");
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index.html");
	}
	
}
