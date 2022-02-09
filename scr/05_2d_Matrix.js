const getRadomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const matrix = new Array()

for(let i = 0; i< 5; i++)
{
    let temp = new Array()

    for(let j =0; j<5; j++)
    {
        temp.push(getRadomInt(1, 10))
    }

    matrix.push(temp)
}

matrix.forEach(x => console.log(...x))