from gpiozero import Servo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory = PiGPIOFactory()
pwm0 = Servo("GPIO12", initial_value=0.5, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)

while (1):
    x = input("Enter Prompt: ")

    if (x == "+"):
        pwm0.value += 0.05
        print(pwm0.value)
    elif (x == "-"):
        pwm0.value -= 0.05
        print(pwm0.value)
    elif (x == "value"):
        print(pwm0.value)
    elif (x == "pw"):
        print(pwm0.pulse_width)
    elif (x == "min"):
        pwm0.min()
    elif (x == "mid"):
        pwm0.mid()
    elif (x == "max"):
        pwm0.max()
    elif (x == "detatch" or x == "stop"):
        pwm0.detach()
    else:
        pwm0.value = float(x)