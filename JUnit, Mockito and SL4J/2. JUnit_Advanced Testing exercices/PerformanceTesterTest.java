import org.junit.jupiter.api.Test;
import java.time.Duration;
import static org.junit.jupiter.api.Assertions.*;

public class PerformanceTesterTest {

    @Test
    void testTimeout() {
        PerformanceTester obj = new PerformanceTester();

        assertTimeout(Duration.ofSeconds(1), () -> {
            obj.performTask();
        });
    }
}
