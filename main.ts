let tool = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    
})
