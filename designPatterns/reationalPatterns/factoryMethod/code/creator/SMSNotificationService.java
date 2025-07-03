package reationalPatterns.factoryMethod.code.creator;

import reationalPatterns.factoryMethod.code.product.Notification;
import reationalPatterns.factoryMethod.code.product.SMSNotifcation;

public class SMSNotificationService extends NotificationService {
    // Implementing the factory method to create an SMS notification
    @Override
    public Notification createNotification() {
        return new SMSNotifcation(); // Return a new instance of SMSNotifcation
    }
    
    // Additional methods specific to SMS notifications can be added here   
    
}
