class Order {
    int orderId;
    String customerName;
    double totalPrice;

    Order(int id, String name, double price) {
        orderId = id;
        customerName = name;
        totalPrice = price;
    }
}

public class Exercise3_SortingOrders {

    static void bubbleSort(Order[] arr) {

        for (int i = 0; i < arr.length - 1; i++) {

            for (int j = 0; j < arr.length - i - 1; j++) {

                if (arr[j].totalPrice > arr[j + 1].totalPrice) {

                    Order temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {}
}
