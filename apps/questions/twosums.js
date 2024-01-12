export default function twoSums(array = []) {
    let map = new Map();
    map = array.reduce((prev, cur, index) => { 
        if(!prev.has(cur)){
            prev.set(cur,  []);
        }
        const arr = prev.get(cur);
        arr.push(index);
        prev.set(cur, arr);
        return prev 
    }, map);

    const pairs = [];

    const reduceAndDelete = (key) => {
        const arr = map.get(key);
        const index = arr.shift();
        if(arr.length === 0){
            map.delete(key);
        }
        delete array[index];
    };

    let index = 0;
    while(map.size !== 0) {
        const part1 = array [index];
        if(part1){
            reduceAndDelete(part1);
            const part2 = 10 - part1;
            const hasPart2 = map.has(part2);
            if(hasPart2) {
                pairs.push([part1, part2]);
                reduceAndDelete(part2);
            }
        }
        index++;
    }

    return pairs;
}