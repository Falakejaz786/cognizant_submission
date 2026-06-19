public class Exercise7_FinancialForecasting {

    static double futureValue(double amount, double rate, int years) {

        if (years == 0)
            return amount;

        return futureValue(amount * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {

        System.out.println(
            futureValue(1000, 0.1, 3)
        );
    }
}
