package reationalPatterns.factoryMethod.code;

import reationalPatterns.factoryMethod.code.creator.EmailNotificationService;
import reationalPatterns.factoryMethod.code.creator.NotificationService;
import reationalPatterns.factoryMethod.code.creator.PushNotificationService;
import reationalPatterns.factoryMethod.code.creator.SMSNotificationService;

public class NotificationClient {
    public static void main(String[] args) {
        // Client uses the abstract Creator type
        NotificationService service1 = new SMSNotificationService();
        System.out.println("--- Using SMS Notification Service ---");
        service1.processNotification(); // Calls SMSNotification.send() internally

        System.out.println("\n--- Using Email Notification Service ---");
        NotificationService service2 = new EmailNotificationService();
        service2.processNotification(); // Calls EmailNotification.send() internally

        System.out.println("\n--- Using Push Notification Service ---");
        NotificationService service3 = new PushNotificationService();
        service3.processNotification(); // Calls PushNotification.send() internally

        // To add a new notification type (e.g., WhatsAppNotification), you would:
        // Create WhatsAppNotification (implements Notification).

        // Create WhatsAppNotificationService (extends NotificationService and
        // implements createNotification() to return WhatsAppNotification).

        // You do NOT modify any existing factory or client code. This makes the system
        // highly extensible.
        //
    }

}
