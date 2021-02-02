import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0, frequency=50)
pwm0.on()

pwm0.value = 0.0
print("0.0")
sleep(10)

pwm0.value = 0.03
print("0.03")
sleep(5)
pwm0.off()
