const delay = (time) => {
    console.log('time: ', time);
    if (time <= 0) return;
    return new Promise((resolve) => setTimeout(resolve, time));
}

const run = async () => {
    for (let i = 0; i < 20; i++) {
        const time1 = new Date();

        let num;
        for (let j = 0; j < Math.random() * (200000000 - 1) + 1; j++) {
            Math.random();
            const timeLoop = new Date();
            num = j;
            if (timeLoop - time1 > 1000) break;
        }
        const time2 = new Date();
        const timeDifferenceSeconds = time2 - time1;
        console.log('num', num);

        await delay(1000 - timeDifferenceSeconds);

        const finalTime = new Date();
        var finalTimePrint =
            'Iteration ' +
            (i + 1) +
            ': ' +
            finalTime.getHours() +
            ':' +
            finalTime.getMinutes() +
            ':' +
            finalTime.getSeconds() +
            ':' +
            finalTime.getMilliseconds();
        console.log(finalTimePrint);
    }
}

run();
