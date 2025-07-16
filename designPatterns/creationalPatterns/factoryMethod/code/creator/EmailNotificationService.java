package reationalPatterns.factoryMethod.code.creator;

import reationalPatterns.factoryMethod.code.product.EmailNotification;
import reationalPatterns.factoryMethod.code.product.Notification;

public class EmailNotificationService extends NotificationService {
    // Implementing the factory method to create an Email notification
    @Override
    public Notification createNotification() {
        return new EmailNotification(); // Return a new instance of EmailNotification
    }
    
    // Additional methods specific to Email notifications can be added here
    
}
