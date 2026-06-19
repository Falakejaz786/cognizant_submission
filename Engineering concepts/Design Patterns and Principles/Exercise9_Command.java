interface Command {
    void execute();
}

class Light {

    void on() {
        System.out.println("Light ON");
    }
}

class LightOnCommand implements Command {

    private Light light;

    LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.on();
    }
}

class RemoteControl {

    private Command command;

    void setCommand(Command command) {
        this.command = command;
    }

    void pressButton() {
        command.execute();
    }
}

public class Exercise9_Command {

    public static void main(String[] args) {

        Light light = new Light();

        RemoteControl remote =
            new RemoteControl();

        remote.setCommand(
            new LightOnCommand(light));

        remote.pressButton();
    }
}
