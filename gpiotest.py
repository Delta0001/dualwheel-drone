import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0, frequency=50)
print("on")
pwm0.on()

pwm0.value = 0.0
print("0.0 ARM START")
sleep(3)

# arm
print("0.03 ARM FINISH)
pwm0.value = 0.03
sleep(5)

print("RAMP to 7")
for x in range(0.03, 0.01, 7):
    print(x)
    pwm0.value = x
    sleep(0.1)

# pwm0.value = 0.05
# print("0.05")
# sleep(5)

# pwm0.value = 0.075
# print("0.05")
# sleep(5)

# print("off")
sleep(5)
pwm0.off()
