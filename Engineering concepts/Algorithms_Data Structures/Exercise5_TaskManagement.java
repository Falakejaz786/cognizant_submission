class Task {

    int taskId;
    String taskName;
    String status;
    Task next;

    Task(int id, String name, String status) {
        this.taskId = id;
        this.taskName = name;
        this.status = status;
    }
}

public class Exercise5_TaskManagement {

    static Task head;

    static void add(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        newTask.next = head;

        head = newTask;
    }

    static void traverse() {

        Task temp = head;

        while (temp != null) {

            System.out.println(temp.taskName);

            temp = temp.next;
        }
    }

    public static void main(String[] args) {}
}
