package com.libertyloan.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
@EnableEurekaServer
@SpringBootApplication
public class LibertyloanServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibertyloanServerApplication.class, args);
	}

}
