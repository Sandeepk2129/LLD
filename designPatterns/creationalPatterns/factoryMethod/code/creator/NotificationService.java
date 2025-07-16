package reationalPatterns.factoryMethod.code.creator;
import reationalPatterns.factoryMethod.code.product.Notification;

public abstract class NotificationService {
    // The abstract factory method - subclasses will implement this method
    public abstract Notification createNotification();
    
    // A concrete method that uses the product created by the factory method
    public void processNotification() {
        System.out.println("Preparing to send notification...");
        Notification notification = createNotification(); // Call the factory method
        notification.send(); // Use the created product
        System.out.println("Notification processing complete.");
    }

}
