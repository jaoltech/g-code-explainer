{const gcodeData = {
        "G00": {
            "description": "Rapid positioning. Moves all axes at maximum speed without considering programmed feed rates.",
            "code": "G00 X50 Y50 Z10",
            "example": "G90 G00 X0 Y0 Z2\nG01 Z-16",
            "illustration": "https://via.placeholder.com/300/FF5733/FFFFFF?text=G00"
        };
        "G01": {
            "description": "Linear feed move. Moves the tool along a straight path at a specified feed rate.",
            "code": "G01 X50 Y30 F350",
            "example": "G90 G01 X50 Y30 F350\nX65 Y45",
            "illustration": "https://via.placeholder.com/300/33FF57/FFFFFF?text=G01"
        };
        "G02": {
            "description": "Clockwise circular interpolation. Moves the tool along a circular path in a clockwise direction.",
            "code": "G02 X75 Y25 R50 F800",
            "example": "G17 G90 X25 Y75\nG02 X75 Y25 R50",
            "illustration": "https://via.placeholder.com/300/3357FF/FFFFFF?text=G02"
        };
        "G03": {
            "description": "Counterclockwise circular interpolation. Moves the tool along a circular path counterclockwise.",
            "code": "G03 X75 Y25 R50 F800",
            "example": "G17 G90 X25 Y75\nG03 X75 Y25 R50",
            "illustration": "https://via.placeholder.com/300/FF33A1/FFFFFF?text=G03"
        };
        "G04": {
            "description": "Dwell time. Pauses program execution for a specified time before continuing.",
            "code": "G04 P3500",
            "example": "G04 P1.5 ; Pause for 1.5 seconds",
            "illustration": "https://via.placeholder.com/300/57FF33/FFFFFF?text=G04"
        };
        "G12": {
            "description": "Circular pocket milling. Cuts a circular pocket using clockwise motion.",
            "code": "G12 X25 Y25 I15 K10 Q3 F120",
            "example": "G12 Z-5 I3. K15 Q3 D01 F120",
            "illustration": "https://via.placeholder.com/300/5733FF/FFFFFF?text=G12"
        };
        "G40": {
            "description": "Cancel cutter radius compensation.",
            "code": "G40",
            "example": "G01 X25 Y30\nG40 G00 X10 Y30",
            "illustration": "https://via.placeholder.com/300/FFAA33/FFFFFF?text=G40"
        };
        "G41": {
            "description": "Cutter compensation left. Offsets tool to the left based on programmed tool radius.",
            "code": "G41 D5 X0 Y-50",
            "example": "G00 G41 D5 X0 Y-50\nG01 Y50 F250",
            "illustration": "https://via.placeholder.com/300/AA33FF/FFFFFF?text=G41"
        };
        "G42": {
            "description": "Cutter compensation right. Offsets tool to the right based on programmed tool radius.",
            "code": "G42 D5 X0 Y-50",
            "example": "G00 G42 D5 X0 Y-50\nG01 Y50 F250",
            "illustration": "https://via.placeholder.com/300/33FFA5/FFFFFF?text=G42"
        };
        "G43": {
            "description": "Tool length compensation. Adjusts tool length offset.",
            "code": "G43 H5 D5 Z20",
            "example": "G43 H5 D5 Z20",
            "illustration": "https://via.placeholder.com/300/FFA533/FFFFFF?text=G43"
        };
        "G81": {
            "description": "Simple drilling cycle. Drills a hole to a specified depth and returns to the starting position.",
            "code": "G81 X25 Y40 Z-20 R2 F250",
            "example": "G99 G81 X25 Y40 Z-20 R2 F250\nX50\nG80",
            "illustration": "https://via.placeholder.com/300/FF3357/FFFFFF?text=G81"
        };
        "G83": {
            "description": "Peck drilling cycle. Drills in increments to clear chips before reaching final depth.",
            "code": "G83 X25 Y40 Z-50 Q15 R2 F250",
            "example": "G99 G83 X25 Y40 Z-50 Q15 R2 F250\nX50\nG80",
            "illustration": "https://via.placeholder.com/300/33FF33/FFFFFF?text=G83"
        };
        "G84": {
            "description": "Tapping cycle. Synchronizes spindle speed and feed rate to cut threads.",
            "code": "G84 X25 Y40 Z-50 R2 F250",
            "example": "G99 G84 X25 Y40 Z-50 R2 F250\nX50\nG80",
            "illustration": "https://via.placeholder.com/300/FF3333/FFFFFF?text=G84"
        }
    };
}