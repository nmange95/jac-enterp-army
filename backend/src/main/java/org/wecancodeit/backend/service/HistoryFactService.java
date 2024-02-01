package org.wecancodeit.backend.service;

import java.io.IOException;
import java.io.StringReader;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;
import org.wecancodeit.backend.model.HistoryModel;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class HistoryFactService {

    private List<HistoryModel> getHistoryModels(String year) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        ObjectMapper objectMapper = new ObjectMapper();

        String url = String.format("https://api.api-ninjas.com/v1/historicalevents?year=%s", year);
        String apiKey = "H6AGSoqTBFVwpdg15+Fv5g==1VcGynzFROnoccg2";

        HttpRequest historyFactRequest = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("X-Api-Key", apiKey)
                .GET()
                .build();

        HttpResponse<String> historyFacHttpResponse = client.send(historyFactRequest,
                HttpResponse.BodyHandlers.ofString());

        JsonNode jsonArray = objectMapper.readTree(new StringReader(historyFacHttpResponse.body()));

        List<HistoryModel> historyModels = new ArrayList<>();

        for (JsonNode jsonNode : jsonArray) {
            int responseYear = jsonNode.has("year") ? jsonNode.get("year").asInt() : 0;
            int day = jsonNode.has("day") ? jsonNode.get("day").asInt() : 0;
            int month = jsonNode.has("month") ? jsonNode.get("month").asInt() : 0;
            String event = jsonNode.has("event") ? jsonNode.get("event").asText() : "";

            historyModels.add(new HistoryModel(responseYear, month, day, event));
        }

        return historyModels;
    }

    public HistoryModel getRandomFact(String year) throws IOException, InterruptedException {
        List<HistoryModel> historyModels = getHistoryModels(year);

        if (!historyModels.isEmpty()) {
            Random random = new Random();
            return historyModels.get(random.nextInt(historyModels.size()));
        } else {
            System.out.println("Invalid year");
            return null;
        }
    }
}
