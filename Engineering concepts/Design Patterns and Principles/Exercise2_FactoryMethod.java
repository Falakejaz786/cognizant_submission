interface Document {
    void open();
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF Opened");
    }
}

abstract class DocumentFactory {
    abstract Document createDocument();
}

class PdfFactory extends DocumentFactory {

    Document createDocument() {
        return new PdfDocument();
    }
}

public class Exercise2_FactoryMethod {

    public static void main(String[] args) {

        DocumentFactory factory = new PdfFactory();

        Document doc = factory.createDocument();

        doc.open();
    }
}
