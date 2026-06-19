import java.util.*;

interface Observer {
    void update();
}

class MobileApp implements Observer {

    public void update() {
        System.out.println("Mobile Updated");
    }
}

class StockMarket {

    List<Observer> observers = new ArrayList<>();

    void register(Observer o) {
        observers.add(o);
    }

    void notifyObservers() {

        for(Observer o : observers)
            o.update();
    }
}

public class Exercise7_Observer {

    public static void main(String[] args) {

        StockMarket market = new StockMarket();

        market.register(new MobileApp());

        market.notifyObservers();
    }
}
