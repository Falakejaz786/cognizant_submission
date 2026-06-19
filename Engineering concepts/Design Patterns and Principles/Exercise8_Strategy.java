interface PaymentStrategy {
    void pay();
}

class CreditCardPayment implements PaymentStrategy {

    public void pay() {
        System.out.println("Credit Card Payment");
    }
}

class PaymentContext {

    private PaymentStrategy strategy;

    PaymentContext(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    void execute() {
        strategy.pay();
    }
}

public class Exercise8_Strategy {

    public static void main(String[] args) {

        PaymentContext p =
            new PaymentContext(
                new CreditCardPayment());

        p.execute();
    }
}
