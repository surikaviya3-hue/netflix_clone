package jar;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jar.dto.D;
@RestController
@RequestMapping("/")
public class index {
    @GetMapping
    public D m1() {
        return new D();
    }
    
}
