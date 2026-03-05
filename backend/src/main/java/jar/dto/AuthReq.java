package jar.dto;
import lombok.Data;
@Data
public class AuthReq {
    String name;
    String email;
    String password;
}