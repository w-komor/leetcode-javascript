/*
* 2721. Execute Asynchronous Functions in Parallel
* https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
*
*/

const promiseAll = async (functions) => {
    if (functions.length === 0) return Promise.resolve(functions);

    const result = [];
    let doneCount = 0;
    
    return new Promise((resolve, reject) => {
        functions.forEach((fn, index) => {
           fn()
            .then((res) => {
                result[index] = res;
                doneCount++;
                if (doneCount === functions.length) resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
        });
    });
};