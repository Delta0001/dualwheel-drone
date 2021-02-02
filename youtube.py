import RPi.GPIO as GPIO
import time

GPIO.cleanup()
GPIO.setmode(GPIO.BOARD)
GPIO.setup(12,GPIO.OUT)

p = GPIO.PWM(12,50)
p.start(0)
print("0")
time.sleep(10)

p.ChangeDutyCycle(3)
print("3")
time.sleep(10)