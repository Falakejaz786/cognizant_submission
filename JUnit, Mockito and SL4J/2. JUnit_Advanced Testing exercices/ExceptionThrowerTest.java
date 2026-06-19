import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ExceptionThrowerTest {

    @Test
    void testException() {
        ExceptionThrower obj = new ExceptionThrower();

        assertThrows(RuntimeException.class, () -> {
            obj.throwException();
        });
    }
}
