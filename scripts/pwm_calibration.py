import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=False, initial_value=0.54, frequency=50)

print("POWER OFF")
pwm0.off()
sleep(1)

# power
print("POWER ON")
pwm0.on()
sleep(3)

# arm sequence
print("ARM SEQ START")
pwm0.value = 0.58
sleep(1)

# measure max throttle
print("MAX THROTTLE")
pwm0.value = 0.9
sleep(4)

# measure min throttle
print("MIN THROTTLE")
pwm0.value = 0.1
sleep(4)

print("PROG EXIT")