import java.util.HashMap;

class Product {
    int productId;
    String productName;
    int quantity;
    double price;

    Product(int id, String name, int quantity, double price) {
        this.productId = id;
        this.productName = name;
        this.quantity = quantity;
        this.price = price;
    }
}

public class Exercise1_InventoryManagement {

    static HashMap<Integer, Product> inventory = new HashMap<>();

    public static void addProduct(Product p) {
        inventory.put(p.productId, p);
    }

    public static void updateProduct(int id, int quantity) {
        if (inventory.containsKey(id))
            inventory.get(id).quantity = quantity;
    }

    public static void deleteProduct(int id) {
        inventory.remove(id);
    }

    public static void main(String[] args) {

        addProduct(new Product(1, "Laptop", 10, 50000));

        updateProduct(1, 20);

        deleteProduct(1);
    }
}
