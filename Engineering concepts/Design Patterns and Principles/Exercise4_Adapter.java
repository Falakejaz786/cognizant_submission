interface PaymentProcessor {
    void processPayment();
}

class PayPalGateway {

    void makePayment() {
        System.out.println("PayPal Payment");
    }
}

class PayPalAdapter implements PaymentProcessor {

    PayPalGateway gateway = new PayPalGateway();

    public void processPayment() {
        gateway.makePayment();
    }
}

public class Exercise4_Adapter {

    public static void main(String[] args) {

        PaymentProcessor p = new PayPalAdapter();

        p.processPayment();
    }
}
