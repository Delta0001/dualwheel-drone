import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=False, initial_value=0.54, frequency=50)

while (1):
    x = input("Enter Prompt: ")

    if (x == "ON"):
        pwm0.on()
    elif (x == "OFF"):
        pwm0.off()
    else:
        pwm0.value = float(x)