from gpiozero import Servo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory = PiGPIOFactory()
pwm0 = Servo("GPIO12", initial_value=0.5, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)

while (1):
    x = input("Enter Prompt: ")

    if (x == "+"):
        pwm0.value += 0.05
    elif (x == "-"):
        pwm0.value -= 0.05
    elif (x == "value"):
        print(pwm0.value)
    else:
        pwm0.value = float(x)