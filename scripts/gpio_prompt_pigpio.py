from gpiozero import Servo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory = PiGPIOFactory()
pwm0 = Servo("GPIO12", initial_value=0.0, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)
pwm1 = Servo("GPIO13", initial_value=0.0, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)

while (1):
    x = input("Enter Prompt: ")

    if (x == "+"):
        pwm0.value += 0.01
        pwm1.value += 0.01
        print(pwm0.value)
        print(pwm1.value)
    elif (x == "-"):
        pwm0.value -= 0.01
        pwm1.value -= 0.01
        print(pwm0.value)
        print(pwm1.value)
    elif (x == "value"):
        print(pwm0.value)
        print(pwm1.value)
    elif (x == "pw"):
        print(pwm0.pulse_width)
        print(pwm1.pulse_width)
    elif (x == "fw"):
        print(pwm0.frame_width)
        print(pwm1.frame_width)
    elif (x == "isactive"):
        print(pwm0.is_active)
        print(pwm1.is_active)
    elif (x == "min"):
        pwm0.min() # actual min seems to be -0.27
        pwm1.min() # actual min seems to be -0.27
    elif (x == "mid"):
        pwm0.mid()
        pwm1.mid()
    elif (x == "max"):
        pwm0.max()
        pwm1.max()
    elif (x == "detach" or x == "stop"):
        pwm0.detach()
        pwm1.detach()
    else:
        pwm0.value = float(x)
        pwm1.value = float(x)