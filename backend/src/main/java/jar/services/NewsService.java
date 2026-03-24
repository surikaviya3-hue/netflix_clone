package jar.services;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class NewsService {

    private final String API_KEY = "7a8720c45524471cae7d887d8fd8e6ee";

    public String getMovieNews() {
        String url = "https://newsapi.org/v2/everything?q=movies&sortBy=publishedAt&apiKey=" + API_KEY;

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }
}