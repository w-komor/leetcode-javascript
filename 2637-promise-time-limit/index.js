/*
* 2637. Promise Time Limit
* https://leetcode.com/problems/promise-time-limit/
*
*/

const timeLimit = (fn, t) => {
	return async function(...args) {
        return new Promise(async (resolve, reject) => {
            const timeout = setTimeout(() => reject('Time Limit Exceeded'), t);
            fn(...args)
                .then(result => {
                    clearTimeout(timeout);
                    resolve(result);
                })
                .catch(error => {
                    clearTimeout(timeout);
                    reject(error);
                });
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */