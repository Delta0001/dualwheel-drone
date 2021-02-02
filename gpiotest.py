import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", True, 0)
pwm0.on()
pwm0.frequency = 50
pwm0.value = 0.75
while True:
    print("off")
    pwm0.off()
    sleep(5)
    print("on")
    pwm0.on()
    sleep(5)
