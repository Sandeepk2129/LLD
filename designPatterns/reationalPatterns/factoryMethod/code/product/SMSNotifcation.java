package reationalPatterns.factoryMethod.code.product;

public class SMSNotifcation implements Notification {
    @Override
    public void send() {
        System.out.println("SMS Notification sent");
    }
}
