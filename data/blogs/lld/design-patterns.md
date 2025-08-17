---
title: "Essential Design Patterns for Low Level Design"
description: "Master the most important design patterns used in system design interviews"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["design-patterns", "low-level-design", "object-oriented", "java"]
difficulty: "intermediate"
youtube: "https://www.youtube.com/watch?v=v9ejT8FO-7I"
---

# Essential Design Patterns for Low Level Design

Design patterns are reusable solutions to common problems in software design. They're crucial for low-level design interviews and building maintainable systems.

## YouTube Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/v9ejT8FO-7I" title="Design Patterns Tutorial" frameborder="0" allowfullscreen></iframe>

## Why Design Patterns Matter

- **Reusability**: Proven solutions to recurring problems
- **Communication**: Common vocabulary for developers
- **Best Practices**: Encapsulate design expertise
- **Maintainability**: Make code more flexible and extensible

## Creational Patterns

### 1. Singleton Pattern

Ensures a class has only one instance and provides global access to it.

```java
public class DatabaseConnection {
    private static DatabaseConnection instance;
    private static final Object lock = new Object();
    
    private DatabaseConnection() {
        // Private constructor
    }
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (lock) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
    
    public void connect() {
        System.out.println("Connected to database");
    }
}
```

**Use Cases:**
- Database connections
- Logger instances
- Configuration managers
- Cache managers

### 2. Factory Pattern

Creates objects without specifying their exact classes.

```java
// Product interface
interface Vehicle {
    void start();
}

// Concrete products
class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike started");
    }
}

// Factory
class VehicleFactory {
    public static Vehicle createVehicle(String type) {
        switch (type.toLowerCase()) {
            case "car":
                return new Car();
            case "bike":
                return new Bike();
            default:
                throw new IllegalArgumentException("Unknown vehicle type");
        }
    }
}

// Usage
Vehicle vehicle = VehicleFactory.createVehicle("car");
vehicle.start();
```

### 3. Builder Pattern

Constructs complex objects step by step.

```java
public class Computer {
    private String CPU;
    private String RAM;
    private String storage;
    private String GPU;
    
    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.GPU = builder.GPU;
    }
    
    public static class Builder {
        private String CPU;
        private String RAM;
        private String storage;
        private String GPU;
        
        public Builder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }
        
        public Builder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }
        
        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }
        
        public Builder setGPU(String GPU) {
            this.GPU = GPU;
            return this;
        }
        
        public Computer build() {
            return new Computer(this);
        }
    }
}

// Usage
Computer computer = new Computer.Builder()
    .setCPU("Intel i7")
    .setRAM("16GB")
    .setStorage("512GB SSD")
    .setGPU("RTX 3080")
    .build();
```

## Structural Patterns

### 4. Adapter Pattern

Allows incompatible interfaces to work together.

```java
// Target interface
interface MediaPlayer {
    void play(String audioType, String fileName);
}

// Adaptee
class AdvancedMediaPlayer {
    public void playVlc(String fileName) {
        System.out.println("Playing vlc file: " + fileName);
    }
    
    public void playMp4(String fileName) {
        System.out.println("Playing mp4 file: " + fileName);
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private AdvancedMediaPlayer advancedPlayer;
    
    public MediaAdapter(String audioType) {
        if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
            advancedPlayer = new AdvancedMediaPlayer();
        }
    }
    
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedPlayer.playVlc(fileName);
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedPlayer.playMp4(fileName);
        }
    }
}

// Client
class AudioPlayer implements MediaPlayer {
    private MediaAdapter mediaAdapter;
    
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("mp3")) {
            System.out.println("Playing mp3 file: " + fileName);
        } else {
            mediaAdapter = new MediaAdapter(audioType);
            mediaAdapter.play(audioType, fileName);
        }
    }
}
```

### 5. Decorator Pattern

Adds new functionality to objects dynamically without altering their structure.

```java
// Component interface
interface Coffee {
    double getCost();
    String getDescription();
}

// Concrete component
class SimpleCoffee implements Coffee {
    public double getCost() {
        return 2.0;
    }
    
    public String getDescription() {
        return "Simple coffee";
    }
}

// Base decorator
abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;
    
    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }
    
    public double getCost() {
        return coffee.getCost();
    }
    
    public String getDescription() {
        return coffee.getDescription();
    }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }
    
    public double getCost() {
        return super.getCost() + 0.5;
    }
    
    public String getDescription() {
        return super.getDescription() + ", milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }
    
    public double getCost() {
        return super.getCost() + 0.2;
    }
    
    public String getDescription() {
        return super.getDescription() + ", sugar";
    }
}

// Usage
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
System.out.println(coffee.getDescription() + " costs $" + coffee.getCost());
```

## Behavioral Patterns

### 6. Observer Pattern

Defines a one-to-many dependency between objects.

```java
import java.util.*;

// Subject interface
interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// Observer interface
interface Observer {
    void update(String message);
}

// Concrete subject
class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String news;
    
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }
    
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }
    
    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }
}

// Concrete observer
class NewsChannel implements Observer {
    private String name;
    
    public NewsChannel(String name) {
        this.name = name;
    }
    
    public void update(String news) {
        System.out.println(name + " received news: " + news);
    }
}

// Usage
NewsAgency agency = new NewsAgency();
NewsChannel channel1 = new NewsChannel("CNN");
NewsChannel channel2 = new NewsChannel("BBC");

agency.registerObserver(channel1);
agency.registerObserver(channel2);
agency.setNews("Breaking: New design pattern discovered!");
```

### 7. Strategy Pattern

Defines a family of algorithms and makes them interchangeable.

```java
// Strategy interface
interface PaymentStrategy {
    void pay(double amount);
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    
    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }
    
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using Credit Card: " + cardNumber);
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;
    
    public PayPalPayment(String email) {
        this.email = email;
    }
    
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using PayPal: " + email);
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    
    public void checkout(double amount) {
        paymentStrategy.pay(amount);
    }
}

// Usage
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout(100.0);

cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
cart.checkout(50.0);
```

### 8. Command Pattern

Encapsulates a request as an object.

```java
// Command interface
interface Command {
    void execute();
    void undo();
}

// Receiver
class Light {
    private boolean isOn = false;
    
    public void turnOn() {
        isOn = true;
        System.out.println("Light is ON");
    }
    
    public void turnOff() {
        isOn = false;
        System.out.println("Light is OFF");
    }
}

// Concrete commands
class LightOnCommand implements Command {
    private Light light;
    
    public LightOnCommand(Light light) {
        this.light = light;
    }
    
    public void execute() {
        light.turnOn();
    }
    
    public void undo() {
        light.turnOff();
    }
}

class LightOffCommand implements Command {
    private Light light;
    
    public LightOffCommand(Light light) {
        this.light = light;
    }
    
    public void execute() {
        light.turnOff();
    }
    
    public void undo() {
        light.turnOn();
    }
}

// Invoker
class RemoteControl {
    private Command command;
    private Command lastCommand;
    
    public void setCommand(Command command) {
        this.command = command;
    }
    
    public void pressButton() {
        command.execute();
        lastCommand = command;
    }
    
    public void pressUndo() {
        if (lastCommand != null) {
            lastCommand.undo();
        }
    }
}
```

## When to Use Each Pattern

| Pattern | Use When |
|---------|----------|
| Singleton | Need exactly one instance (DB connection, logger) |
| Factory | Creating objects based on conditions |
| Builder | Constructing complex objects with many parameters |
| Adapter | Integrating incompatible interfaces |
| Decorator | Adding features dynamically |
| Observer | One-to-many notifications needed |
| Strategy | Multiple algorithms for same task |
| Command | Need to queue, log, or undo operations |

## Common Interview Questions

1. **Design a parking lot system** - Use Factory, Observer, Strategy
2. **Design a chess game** - Use Command, Strategy, State patterns
3. **Design a notification system** - Use Observer, Factory patterns
4. **Design a payment system** - Use Strategy, Factory patterns

## Best Practices

1. **Don't overuse patterns** - Apply only when needed
2. **Understand the problem first** - Choose appropriate pattern
3. **Consider SOLID principles** - Patterns should enhance, not violate them
4. **Think about extensibility** - How will requirements change?

## Resources for Practice

- [Refactoring Guru Design Patterns](https://refactoring.guru/design-patterns)
- [Head First Design Patterns Book](https://www.oreilly.com/library/view/head-first-design/0596007124/)
- [Design Patterns in Java](https://github.com/iluwatar/java-design-patterns)

Master these patterns and you'll be well-prepared for any low-level design interview!
