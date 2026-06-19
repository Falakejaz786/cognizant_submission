interface Notifier {
    void send();
}

class EmailNotifier implements Notifier {

    public void send() {
        System.out.println("Email Sent");
    }
}

class SMSNotifierDecorator implements Notifier {

    private Notifier notifier;

    SMSNotifierDecorator(Notifier notifier) {
        this.notifier = notifier;
    }

    public void send() {
        notifier.send();
        System.out.println("SMS Sent");
    }
}

public class Exercise5_Decorator {

    public static void main(String[] args) {

        Notifier n =
            new SMSNotifierDecorator(
                new EmailNotifier());

        n.send();
    }
}
