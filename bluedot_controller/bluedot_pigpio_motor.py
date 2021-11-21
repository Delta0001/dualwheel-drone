from bluedot import BlueDot
from signal import pause
from gpiozero import Motor, PWMOutputDevice
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

bd = BlueDot()

factory = PiGPIOFactory()
PWM0 = PWMOutputDevice(pin=12, initial_value=0, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)
PWM1 = PWMOutputDevice(pin=13, initial_value=0, min_pulse_width=1/1000, max_pulse_width=2/1000, pin_factory=factory)

# Since the Motor class doesn't support motor types like L298N which take a PWM signal from the Enable Pins, we set pwm=False and control PWM ourselves. 
Motor0 = Motor(10, 11, enable=12, pwm=False, pin_factory=factory)
Motor1 = Motor(24, 25, enable=13, pwm=False, pin_factory=factory)

PWM0.value=1.0
PWM1.value=1.0

def move(pos):
    print(pos)
    if pos.top:
        Motor0.forward()
        Motor1.forward()
    elif pos.bottom:
        Motor0.backward()
        Motor1.backward()
    elif pos.left:
        Motor0.forward()
        Motor1.backward()
    elif pos.right:
        Motor0.backward()
        Motor1.forward()

def stop():
    print("stopped")
    Motor0.Stop()
    Motor1.Stop()

bd.when_pressed = move
bd.when_moved = move
bd.when_released = stop

pause()