function solution(arr) {
    let dict = new Map();
    for (let item of arr) {
        let obj = JSON.parse(item);
        if (!dict.has(obj["town"])) {
            dict.set(obj["town"], obj["income"]);
        } else {
            dict.set(obj["town"], dict.get(obj["town"]) + obj["income"]);
        }
    }
    let keys = Array.from(dict.keys());
    keys.sort();
    for (let key of keys) {
        console.log(`${key} -> ${dict.get(key)}`);
    }
}

solution(
    ['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}']
)