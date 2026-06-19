class Computer {

    String cpu;
    int ram;

    private Computer(Builder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
    }

    static class Builder {

        String cpu;
        int ram;

        Builder setCpu(String cpu) {
            this.cpu = cpu;
            return this;
        }

        Builder setRam(int ram) {
            this.ram = ram;
            return this;
        }

        Computer build() {
            return new Computer(this);
        }
    }
}

public class Exercise3_Builder {

    public static void main(String[] args) {

        Computer pc = new Computer.Builder()
                .setCpu("i5")
                .setRam(16)
                .build();
    }
}
