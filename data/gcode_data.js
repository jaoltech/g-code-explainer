const gcodeData ={
    "G00": {
        "heading": "Rapid positioning",
        "description": "Rapid positioning. Moves all axes at maximum speed without considering programmed feed rates.",
        "code": "G00 X50 Y50 Z10",
        "example": "G90 G00 X0. Y0. Z2.\nG01 Z-16.",
        "illustration": "https://via.placeholder.com/300/FF5733/FFFFFF?text=G00"
    },
    "G01": {
        "heading": "Linear feed move",
        "description": "Linear feed move. Moves the tool along a straight path at a specified feed rate.",
        "code": "G01 X50 Y30 F350",
        "example": "G90 G01 X50. Y30. F350.\nX65. Y45.",
        "illustration": "https://via.placeholder.com/300/33FF57/FFFFFF?text=G01"
    },
    "G02": {
        "heading": "Clockwise circular interpolation",
        "description": "Clockwise circular interpolation. Moves the tool along a circular path in a clockwise direction.",
        "code": "G02 X75. Y25. R50. F800.",
        "example": "G17 G90 X25. Y75.\nG02 X75. Y25. R50.",
        "illustration": "G02.svg"
    },
    "G03": {
        "heading": "Counterclockwise circular interpolation",
        "description": "Counterclockwise circular interpolation. Moves the tool along a circular path counterclockwise.",
        "code": "G03 X75 Y25 R50 F800.",
        "example": "G17 G90 X25. Y75.\nG03 X75. Y25. R50.",
        "illustration": "https://via.placeholder.com/300/FF33A1/FFFFFF?text=G03"
    },
    "G04": {
        "heading": "Dwell time",
        "description": "Dwell time. Pauses program execution for a specified time before continuing.",
        "code": "G04 P3500",
        "example": "G04 P1.5 ; Pause for 1.5 seconds",
        "illustration": "https://via.placeholder.com/300/57FF33/FFFFFF?text=G04"
    },
    "G12": {
        "heading": "Circular pocket milling",
        "description": "Circular pocket milling. Cuts a circular pocket using clockwise motion.",
        "code": "G12 X25. Y25. I15. K10. Q3 F120.",
        "example": "G12 Z-5 I3. K15. Q3. D01 F120.",
        "illustration": "https://via.placeholder.com/300/5733FF/FFFFFF?text=G12"
    },
    "G40": {
        "heading": "Cancel cutter compensation",
        "description": "Cancel cutter radius compensation.",
        "code": "G40",
        "example": "G01 X25. Y30.\nG40 G00 X10. Y30.",
        "illustration": ["G40.png", "G40_1.png"]
    },
    "G41": {
        "heading": "Cutter compensation left",
        "description": "Cutter compensation left. Offsets tool to the left based on programmed tool radius.",
        "code": "G41 D5 X0. Y-50.",
        "example": "G00 G41 D5 X0. Y-50.\nG01 Y50. F250.",
        "illustration": "https://via.placeholder.com/300/AA33FF/FFFFFF?text=G41"
    },
    "G42": {
        "heading": "Cutter compensation right",
        "description": "Cutter compensation right. Offsets tool to the right based on programmed tool radius.",
        "code": "G42 D5 X0 Y-50",
        "example": "G00 G42 D5 X0. Y-50.\nG01 Y50. F250.",
        "illustration": "https://via.placeholder.com/300/33FFA5/FFFFFF?text=G42"
    },
    "G43": {
        "heading": "Tool lenght compensation",
        "description": "Tool length compensation. Adjusts tool length offset.",
        "code": "G43 H5 D5 Z2.",
        "example": "G43 H5 D5 Z2.",
        "illustration": "https://via.placeholder.com/300/FFA533/FFFFFF?text=G43"
    },
    "G47": {
        "heading": "Engraving cycle",
        "description": "Engraves text or sequential numbers and letters",
        "code": "G90 G47 P1 X100. Y100. Z-1. (Engraves a 1 on first call, then 2, 3 etc.)",
        "example": "",
        "illustration": ""
    },
    "G54-G59": {
        "heading": "Zero-point offset",
        "description": "Shifts the current coordinate system by the amount in X and Y",
        "code": "G90 G54 X200. Y200. (Absolute programming, machines moves to X200, Y200)",
        "example": "",
        "illustration": "G54.png"
    },
    "G70": {
        "heading": "Bolt hole circle",
        "description": "Create a bolt hole circle with a set of holes in a diameter",
        "code": "G00 X0. Y0.\nG81 z-4.5 F80. L0.\nG70 X20. Y20. I40. J. L8\nG80",
        "example": "G00 X0. Y0.\nG81 z-4.5 F80. L0.\nG70 X20. Y20. I40. J. L8\nG80",
        "illustration": "G70.png"
    },
    "G81": {
        "heading": "Simple drilling cycle",
        "description": "Simple drilling cycle. Drills a hole to a specified depth and returns to the starting position.",
        "code": "G81 X25. Y40. Z-20. R2. F250.",
        "example": "G99 G81 X25. Y40. Z-20. R2. F250.\nX50\nG80",
        "illustration": ["g81-animation.html", "G81.png"]
    },
    "G83": {
        "heading": "Peck drilling cycle",
        "description": "Peck drilling cycle. Drills in increments to clear chips before reaching final depth.",
        "code": "G83 X25 Y40 Z-50 Q15 R2 F250",
        "example": "G99 G83 X25. Y40. Z-50. Q15. R2. F250.\nX50\nG80",
        "illustration": "https://via.placeholder.com/300/33FF33/FFFFFF?text=G83"
    },
    "G84": {
        "heading": "Tapping cycle",
        "description": "Tapping cycle. Synchronizes spindle speed and feed rate to cut threads.",
        "code": "G84 X25. Y40. Z-50. R2. F250.",
        "example": "G99 G84 X25. Y40. Z-50. R2. F250.\nX50\nG80",
        "illustration": "https://via.placeholder.com/300/FF3333/FFFFFF?text=G84"
    }
};