function getObjIds(objNumbers, callback) {
    objNumbers.forEach(objNumber => {
        const objId = 1;
        callback(objNumber, objId);
    });
}

function handle(objNumbers) {
    let objMap = {};

    getObjIds(objNumbers, (objNumber, objId) => {objMap[objNumber] = objId});

    return objMap;

}

handle(['ABC133', 'EDD333', 'DD23']);