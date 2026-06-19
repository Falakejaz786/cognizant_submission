class Product {
    int productId;
    String productName;
    String category;

    Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }
}

public class Exercise2_SearchFunction {

    static int linearSearch(Product[] arr, String name) {

        for (int i = 0; i < arr.length; i++) {
            if (arr[i].productName.equals(name))
                return i;
        }

        return -1;
    }

    static int binarySearch(Product[] arr, String name) {

        int left = 0, right = arr.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int cmp = arr[mid].productName.compareTo(name);

            if (cmp == 0) return mid;

            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }

    public static void main(String[] args) {}
}
