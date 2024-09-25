// 메소드 호출 예제를 포함한 자바스크립트 코드 파일

class Rectangle{
    constructor(width, height){ 
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height; 
    }
    getPerimeter(){
        return 2*(this.height+this.width) ;
    }
}

const rect = new Rectangle(10,10); 
console.log("Area is" + rect.getArea());
console.log("Perimeter is" + rect.getPerimeter()); 