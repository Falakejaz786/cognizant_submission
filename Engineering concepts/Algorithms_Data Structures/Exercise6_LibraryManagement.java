class Book {

    int bookId;
    String title;
    String author;

    Book(int id, String title, String author) {
        this.bookId = id;
        this.title = title;
        this.author = author;
    }
}

public class Exercise6_LibraryManagement {

    static int linearSearch(Book[] books, String title) {

        for (int i = 0; i < books.length; i++) {

            if (books[i].title.equals(title))
                return i;
        }

        return -1;
    }

    public static void main(String[] args) {}
}
