from bluedot import BlueDot
from signal import pause
from gpiozero import Servo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

bd = BlueDot()

MID_THROTTLE = -0.04

factory = PiGPIOFactory()
PWM0 = Servo("GPIO12", initial_value=MID_THROTTLE, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)
PWM1 = Servo("GPIO13", initial_value=MID_THROTTLE, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)

speed = 0.06

def move(pos):
    print(pos)
    if pos.top:
        PWM0.value = float(MID_THROTTLE+speed)
        PWM1.value = float(MID_THROTTLE+speed)
    elif pos.bottom:
        PWM0.value = float(MID_THROTTLE-speed)
        PWM1.value = float(MID_THROTTLE-speed)
    elif pos.left:
        PWM0.value = float(MID_THROTTLE+speed)
        PWM1.value = float(MID_THROTTLE-speed)
    elif pos.right:
        PWM0.value = float(MID_THROTTLE-speed)
        PWM1.value = float(MID_THROTTLE+speed)

def stop():
    print("stopped")
    PWM0.value = float(MID_THROTTLE)
    PWM1.value = float(MID_THROTTLE)

bd.when_pressed = move
bd.when_moved = move
bd.when_released = stop

pause()
