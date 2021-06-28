---
description: 'Stepper Motor Board STPM20462 6/28/21 3:00PM'
---

# STPM API Document V1.1

#### Default Format \(regAddr, Param1Value, Param2Value.....\)

* `Mode Setup (0x02, movementType, DistanceType)`

                              movementType - Relative: 0x00,   Absolute: 0x01 

                              distanceType - steps:0x00,   mm:0x01,   degrees:0x02

* `Homing Setup (0x02, M1Sense, M2Sense, M1InitialHomeDirection, M2HomeInitialDirection)`

                            M1Sense- None:0x00,   Min:0x10,   Max:0x01,   Both:0x11

                            M2Sense- None:0x00,   Min:0x10,   Max:0x01,   Both:0x11

                            M1InitialHomeDirection- Clockwise:0x00,   Counter Clockwise:0x01 

                            M2InitialHomeDirection- Clockwise:0x00,   Counter Clockwise:0x01

* `Calibration (0x03, homeM1, homeM2)`

                                homeM1-  No:0x00,   min:0x10,   max:0x01,   both:0x11

                                                      \(starts with M1InitialHomeDirection\)

                                 homeM2-  No:0x00,   min:0x10,   max:0x01,   both:0x11

                                                      \(starts with M2InitialHomeDirection\)

* `cmdBfrWrite(0x08, motorSelect, directionSelect, M1Dist, M2Dist)`

                                motorSelect- Both: 0x11,   M1:0x10,   M2:0x01

                                directionSelect- Both +:0x00,   Both -:0x11,   M1+ & M2-:0x01....

                                M1Dist- numerical value with units corresponding to the distanceType

                                M2Dist- numerical value with units corresponding to the distanceType

* `cmdBfrClear(0x20, anything)`

                                anything- can pass any value

