class Employee {
    int employeeId;
    String name;
    String position;
    double salary;

    Employee(int id, String name, String position, double salary) {
        this.employeeId = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

public class Exercise4_EmployeeManagement {

    static Employee[] employees = new Employee[10];
    static int count = 0;

    static void add(Employee e) {
        employees[count++] = e;
    }

    static void traverse() {
        for (int i = 0; i < count; i++)
            System.out.println(employees[i].name);
    }

    public static void main(String[] args) {}
}
