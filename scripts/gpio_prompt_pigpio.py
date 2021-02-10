import gpiozero
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory = PiGPIOFactory()
pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=False, initial_value=0.54, frequency=50)

while (1):
    x = input("Enter Prompt: ")

    if (x == "ON"):
        pwm0.on()
    elif (x == "OFF"):
        pwm0.off()
    else:
        pwm0.value = float(x)