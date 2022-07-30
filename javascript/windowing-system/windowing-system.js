// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


 export function Size(w = 80, h = 60){
    this.width  = w
    this.height = h
}

 Size.prototype.resize = function(w, h){
    this.width  = w
    this.height = h
}

export function Position(x = 0, y = 0){
    this.x = x
    this.y = y
}

Position.prototype.move = function(x,y) {
    this.x = x
    this.y = y
}

export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800,600),
        this.size = new Size(),
        this.position = new Position()
    }

    resize(size){
        let width = size.width>1 ? size.width : 1
        let height = size.height>1 ? size.height : 1
        if(width+this.position.x> this.screenSize.width){
            width = this.screenSize.width - this.position.x
        }
        if(height+this.position.y> this.screenSize.height){
            height= this.screenSize.height - this.position.y
        }
        this.size.resize(width,height)
    }
    move(position){
        let x = position.x>0 ? position.x : 0
        let y = position.y>0 ? position.y : 0

        if(x+this.size.width> this.screenSize.width){
            x = this.screenSize.width - this.size.width
        }
        if(y+this.size.height> this.screenSize.height){
            y = this.screenSize.height - this.size.height
        }
        this.position.move(x,y)

    }
}

export function changeWindow(programWindow){
    const newSize =  new Size(400,300)
    const newPosition =  new Position(100,150)
    programWindow.resize(newSize)
    programWindow.move(newPosition)
    
    return programWindow
}