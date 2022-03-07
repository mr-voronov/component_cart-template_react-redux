export default function objByKey(arrWithObj, property) {
    return arrWithObj.reduce( (accum, obj) => {
        const key = obj[property];

        accum[key] = obj;
        return accum;
    }, {});
}
