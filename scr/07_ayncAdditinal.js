const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve("Finish"), 2000))


 //await позволяеть дождаться оконца выполнения промиса
//Только внутри async функциях


const asyncFnWithAwait = async () =>
{
    console.log("Timer starts")
    const startTime = performance.now()

    await timerPromise().then(data => console.log(data))

    const endTime = performance.now()
    console.log("Timer Ended", startTime - endTime)
}

const asyncFnWithoutAwait = async () =>
{
    console.log("Timer starts")
    const startTime = performance.now()

    timerPromise().then(data => console.log(data))

    const endTime = performance.now()
    console.log("Timer Ended", startTime - endTime)
}

asyncFnWithoutAwait()