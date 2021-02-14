from gpiozero import Servo
# from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

# factory = PiGPIOFactory()
print("POWER ON")
pwm0 = Servo("GPIO12", initial_value=0.0, min_pulse_width=1/1000, max_pulse_width=2/1000)
sleep(4)

print("MAX THROTTLE")
pwm0.max()
sleep(3)

# print("MIN THROTTLE")
# pwm0.min()
# sleep(3)

# print("MID THROTTLE")
# pwm0.mid()
# sleep(3)

print("PROG EXIT")