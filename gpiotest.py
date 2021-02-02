import gpiozero
from time import sleep

pwm0 = gpiozero.PWMOutputDevice("GPIO12", active_high=True, initial_value=0, frequency=50)

pwm0.off()
print("off")

pwm0.on()
print("on")

pwm0.value = 0.0
print("0.0 ARM START")
sleep(3)

# arm
pwm0.value = 0.03
print("0.03 ARM FINISH")
sleep(5)

print("RAMP to 7")
x = 0.03
while (x < 7.0):
    x += 0.01
    
    pwm0.value = x
    print(x)
    sleep(0.1)

# pwm0.value = 0.05
# print("0.05")
# sleep(5)

# pwm0.value = 0.075
# print("0.05")
# sleep(5)

# print("off")
sleep(5)
