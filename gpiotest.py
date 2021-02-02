import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0, frequency=50)
pwm0.value = 0.0
print("0.0")
pwm0.on()
sleep(5)

pwm0.value = 0.05
print("0.05")
sleep(5)
pwm0.off()
