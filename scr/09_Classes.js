class MyClass
{
    constructor(string, count)
    {
        if(count > 0)
        {
            this.fullString = string

            for(let i = 0; i < count-1; i++)
                this.fullString += string
        }
    }

    printFullString()
    {
        console.log(this.fullString)
    }
}

const tempClass = new MyClass("Hello Wold ", 4)

tempClass.printFullString()

class NewMyClass extends MyClass
{
    printFullStringWithSeparator()
    {
        const temp = new MyClass("/", this.fullString.length)

        temp.printFullString()

        this.printFullString()

        temp.printFullString()
    }
}

const newClass = new NewMyClass("My name is Guvany Gergio", 2)

newClass.printFullStringWithSeparator()