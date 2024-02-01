package org.wecancodeit.backend;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.wecancodeit.backend.service.HistoryFactService;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) throws IOException, InterruptedException {
		HistoryFactService factService = new HistoryFactService();
		factService.getRandomFact("1995");
		SpringApplication.run(BackendApplication.class, args);
	}

}
