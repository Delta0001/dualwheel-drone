import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0.54, frequency=50)

print("POWER OFF")
pwm0.off()

# power
print("POWER ON")
pwm0.on()
sleep(10)

# arm sequence
print("ARM SEQ START")
pwm0.value = 0.6
sleep(2)
pwm0.value = 0.7

print("ARM SEQ END")
pwm0.value = 0.54 #0.03 and 0.04 works for normal mode. 0.5 for bidirectional
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
