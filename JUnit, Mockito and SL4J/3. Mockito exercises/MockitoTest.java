import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

public class MockitoTest {

    // Exercise 1 - Mocking and Stubbing
    @Test
    void testMockingAndStubbing() {
        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);

        assertEquals("Mock Data", service.fetchData());
    }

    // Exercise 2 - Verifying Interactions
    @Test
    void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);
        service.fetchData();

        verify(mockApi).getData();
    }

    // Exercise 3 - Argument Matching
    @Test
    void testArgumentMatching() {
        ExternalApi mockApi = mock(ExternalApi.class);

        MyService service = new MyService(mockApi);
        service.saveData("Hello");

        verify(mockApi).sendData(anyString());
    }

    // Exercise 4 - Handling Void Methods
    @Test
    void testVoidMethod() {
        ExternalApi mockApi = mock(ExternalApi.class);

        doNothing().when(mockApi).deleteData();

        mockApi.deleteData();

        verify(mockApi).deleteData();
    }

    // Exercise 5 - Multiple Returns
    @Test
    void testMultipleReturns() {
        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData())
                .thenReturn("First")
                .thenReturn("Second");

        assertEquals("First", mockApi.getData());
        assertEquals("Second", mockApi.getData());
    }

    // Exercise 6 - Verify Order
    @Test
    void testInteractionOrder() {
        ExternalApi mockApi = mock(ExternalApi.class);

        mockApi.getData();
        mockApi.deleteData();

        InOrder order = inOrder(mockApi);

        order.verify(mockApi).getData();
        order.verify(mockApi).deleteData();
    }

    // Exercise 7 - Void Method Exception
    @Test
    void testVoidMethodException() {
        ExternalApi mockApi = mock(ExternalApi.class);

        doThrow(new RuntimeException("Error"))
                .when(mockApi)
                .deleteData();

        assertThrows(RuntimeException.class, () -> {
            mockApi.deleteData();
        });
    }
}
