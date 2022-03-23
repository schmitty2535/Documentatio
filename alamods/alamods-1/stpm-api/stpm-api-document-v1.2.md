---
description: Stepper Motor Board STPM20462 6/29/21 9:39AM
---

# STPM API Document V1.2

#### Default Format (regAddr, Param1Value, Param2Value.....)

## Setup Commands

* `Limit SW Association M0 (0x02, assoc)   REG(R/W)`

![ x=   Not Associated:0    or    Associated:1](../../../.gitbook/assets/image.png)

* `Limit SW Association M1 (0x03, assoc)   REG(R/W)`

![ x=   Not Associated:0    or    Associated:1](<../../../.gitbook/assets/image (4).png>)

* `Homing Setup M0 (0x04, direction)   REG(R/W)`
  * x is equal to the direction a motor must move to reach the specified limit switch

![x= Clockwise:0   or   Counter Clockwise:1](<../../../.gitbook/assets/image (1).png>)

* `Homing Setup M1 (0x05, direction)   REG(R/W)`
  * x is equal to the direction a motor must move to reach the specified limit switch

![x= Clockwise:0   or   Counter Clockwise:1](<../../../.gitbook/assets/image (1).png>)

{% hint style="info" %}
The goal of the above setup commands should allow a user to say home to SW3 and it knows exactly which motors and which direction to proceed in until the switch is activated
{% endhint %}

## Read Commands

* `Query Endstips (0x15)   REG(Read)`
  * Returns the following

![x= Inactive:0   or   Active:1](<../../../.gitbook/assets/image (2).png>)

* `Query Position (0x16)   REG(Read)`
  * Returns a value for each motor corresponding to steps from 0 point

## Control Commands

* `Calibration or Zero (0x06, FirstSW, SecondSW, ThirdSW, FourthSW)`
  * FirstSW, SecondSW, ThirdSW, FourthSW = the limit switch one wishes to calibrate
    * 0x00 = SW0
    * 0x01 = SW1
    * 0x02 = SW2
    * 0x03 = SW3
    * 0x04 = Blank&#x20;

{% hint style="info" %}
The goal of the**`Calibration or Zero`**command is to allow the user to zero all,  a few, or individual limit switches in a specific order
{% endhint %}

* `cmdBfrWrite(0x08, directionSelect, M0Steps, M1Steps)`
  * directionSelection:

![x= Clockwise:0   or   Counter Clockwise:1   ](<../../../.gitbook/assets/image (3).png>)

&#x20;                               M0Steps- numerical value of steps

&#x20;                               M1Steps- numerical value of steps

{% hint style="info" %}
Set M0Steps or M1Steps to 0 in order to not move that specific motor
{% endhint %}

* `cmdBfrClear(0x20, anything)`

&#x20;                               anything- can pass any value





&#x20;  movementType - Relative: 0x00,   Absolute: 0x01&#x20;
