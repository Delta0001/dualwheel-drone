from bluedot import BlueDot
from signal import pause
from gpiozero import Servo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

bd = BlueDot()

factory = PiGPIOFactory()
pwm0 = Servo("GPIO12", initial_value=0.0, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)
pwm1 = Servo("GPIO13", initial_value=0.0, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)

speed = 0.02

def move(pos):
    if pos.top:
        pwm0.value = float(x)
        pwm1.value = float(x)
    elif pos.bottom:
        pwm0.value = float(x)
        pwm1.value = float(x)
    elif pos.left:
        pwm0.value = float(x)
        pwm1.value = float(x)
    elif pos.right:
        pwm0.value = float(x)
        pwm1.value = float(x)

def stop():
    pwm1.value = float(-0.012)

bd.when_pressed = move
bd.when_moved = move
bd.when_released = stop

pause()