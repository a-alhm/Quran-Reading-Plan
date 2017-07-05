function getNumberOfAyats(suras) {
    return suras.reduce((ayats, sura) => ayats + sura.numberOfAyat, 0);
}

function getNumberOfAyatsforEveryPeroid(ayats, numberOfPeroids) {
    return ayats / numberOfPeroids
}
function getAmountOfreadingForeachPeroid(numberOfAyatsToRead, sur, start) {
    const suras = sur.map( obj => Object.assign({}, obj));
    const peroid = {};
    peroid.start = start;
    const surasToRead = [];
    let nextStart = {};
    let done = false;
    let totalAyats = 0;
    let sura;
    if (suras.length === 0) {
        return;
    }
    while (!done) {
        sura = suras.pop();
        totalAyats += sura.numberOfAyat;
        done = totalAyats >= numberOfAyatsToRead || suras.length === 0;
        if (!done) {
            surasToRead.push(sura);
        }
    }
    if (suras.length === 0) {
        numberOfAyatsToRead = totalAyats;
    }
    if (surasToRead.length === 0) {
        peroid.end = {
            name: sura.name,
            ayat: Math.ceil(peroid.start.ayat + numberOfAyatsToRead - 1)
        }
        sura.numberOfAyat = sura.numberOfAyat - numberOfAyatsToRead;

    } else {
        peroid.end = {
            name: sura.name,
            ayat: Math.ceil(numberOfAyatsToRead - getNumberOfAyats(surasToRead))
        }
        sura.numberOfAyat = sura.numberOfAyat - (numberOfAyatsToRead - getNumberOfAyats(surasToRead));
    }

    if (sura.numberOfAyat > 0) {
        suras.push(sura);
        nextStart = { name: sura.name, ayat: Math.ceil(peroid.end.ayat + 1) }
    } else {
        if (suras.length === 0) {
            return peroid;
        }
        sura = suras.pop();
        nextStart = { name: sura.name, ayat: 1 };
        suras.push(sura);
    }

    return [].concat(peroid, getAmountOfreadingForeachPeroid(numberOfAyatsToRead, suras, nextStart))
}


function numberOfReadPeroidsToFinish(weeks, days, peroids) {
    return weeks * days * peroids;
}
export default function getplan(weeks, days, peroids, suras, start = { name: 'الفاتحة', ayat: 1 }) {
    const ayats = getNumberOfAyats(suras);
    const numberOfPeroids = numberOfReadPeroidsToFinish(weeks, days, peroids);
    const numberOfAyatsToRead = getNumberOfAyatsforEveryPeroid(ayats, numberOfPeroids);
    const plan = getAmountOfreadingForeachPeroid(numberOfAyatsToRead, suras, start);
    return plan;
}

