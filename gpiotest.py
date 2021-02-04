import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0, frequency=50)

pwm0.off()
print("off")

# power
pwm0.on()
print("0.0 POWER ON")

# arm sequence
pwm0.value = 0.0
print("0.54 ARM SEQ START")
sleep(3)

pwm0.value = 0.5 #0.03 and 0.04 works for normal mode. 0.5 for bidirectional
print("0.5 ARM SEQ END")
sleep(5)

# print("0.5")
# pwm0.value = 0.5
# sleep(5)

# print("RAMP to 0.7")
# x = 0.04
# while (x < 7.0):
#     x += 0.01
    
#     pwm0.value = x
#     print(x)
#     sleep(0.1)

# sleep(5)
