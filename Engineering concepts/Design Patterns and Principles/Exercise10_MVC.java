class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}

class StudentView {

    void displayStudentDetails(String name) {
        System.out.println(name);
    }
}

class StudentController {

    Student model;
    StudentView view;

    StudentController(
            Student model,
            StudentView view) {

        this.model = model;
        this.view = view;
    }

    void updateView() {
        view.displayStudentDetails(
            model.name);
    }
}

public class Exercise10_MVC {

    public static void main(String[] args) {

        Student s = new Student("Falak");

        StudentView view =
            new StudentView();

        StudentController c =
            new StudentController(s, view);

        c.updateView();
    }
}
