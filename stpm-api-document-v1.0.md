---
description: 'Stepper Motor Board STPM20462 6/28/21 9:45AM'
---

# STPM API Document V1.0

#### Default Format \(regAddr, Param1Value, Param2Value.....\)

* `Mode (0x02, movementType, DistanceType)`

                              movementType - Relative: 0x00,   Absolute: 0x01 

                               distanceType - steps:0x00,   mm:0x01,   degrees:0x02

* `Homing Direction (0x03, M1HomeDirection, M2HomeDirection)`

                               M1HomeDirection- Clockwise:0x00,   Counter Clockwise:0x01

                               M2HomeDirection- Clockwise:0x00,   Counter Clockwise:0x01

* `Calibration (0x04, homeM1, homeM2)`

                                homeM1- Yes: 0x01,   No:0x00  

                                homeM2- Yes: 0x01,   No:0x00  

* `cmdBfrWrite(0x08, motorSelect, directionSelect, M1Dist, M2Dist)`

                                motorSelect- Both: 0x11,   M1:0x10,   M2:0x01

                                directionSelect- Both +:0x00,   Both -:0x11,   M1+ & M2-:0x01........

                                M1Dist- numerical value with units corresponding to the distanceType

                                M2Dist- numerical value with units corresponding to the distanceType

* `cmdBfrClear(0x20, anything)`

                                anything- can pass any value

