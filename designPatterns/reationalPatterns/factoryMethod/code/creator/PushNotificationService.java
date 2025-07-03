package reationalPatterns.factoryMethod.code.creator;

import reationalPatterns.factoryMethod.code.product.Notification;
import reationalPatterns.factoryMethod.code.product.PushNotificaiton;

public class PushNotificationService extends NotificationService {
    // Implementing the factory method to create a push notification
    @Override
    public Notification createNotification() {
        return new PushNotificaiton(); // Return a new instance of PushNotification
    }

    // Additional methods specific to push notifications can be added here

}
