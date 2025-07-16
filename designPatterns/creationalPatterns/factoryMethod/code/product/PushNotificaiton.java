package reationalPatterns.factoryMethod.code.product;

public class PushNotificaiton implements Notification {
    @Override
    public void send() {
        System.out.println("Push Notification sent");
    }
    
}
