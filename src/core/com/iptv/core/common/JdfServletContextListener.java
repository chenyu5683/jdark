package com.iptv.core.common;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class JdfServletContextListener implements ServletContextListener {
	private static String env = System.getenv("JAVA_ENV");

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		if (env != null && env.equals("production")) {
			System.setProperty("spring.profiles.active", "production");
		} else if (env != null && env.equals("test")) {
			System.setProperty("spring.profiles.active", "test");
		} else {
			System.setProperty("spring.profiles.active", "development");
			env = "development";
		}

		System.out.println("==========================================");
		System.out.println("| 当前运行模式：" + env + " |");
		System.out.println("==========================================");
	}
}
