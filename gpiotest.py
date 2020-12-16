import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", True, 0)
pwm0.on()
pwm0.frequency = 8000
pwm0.value = 0.5
while True:
    pass
#    pwm0.off()
#    sleep(1)
#    pwm0.on()
#    pwm0.frequency = 100
#    sleep(1)
