import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0, frequency=50)

pwm0.off()
print("off")

pwm0.on()
print("on")

pwm0.value = 0.0
print("0.0 ARM SEQ START")
sleep(3)

# arm
pwm0.value = 0.04 #0.03 seems to work too
print("0.03 ARM SEQ END")
sleep(5)

pwm0.value = 0.5
# print("RAMP to 7")
# x = 0.04
# while (x < 7.0):
#     x += 0.01
    
#     pwm0.value = x
#     print(x)
#     sleep(0.1)

sleep(5)
