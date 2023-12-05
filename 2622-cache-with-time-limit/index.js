/*
* 2622. Cache With Time Limit
* https://leetcode.com/problems/cache-with-time-limit/
*
*/

class TimeLimitedCache {

    constructor() {
        this.cache = {};
        this.timeouts = {};
        this.size = 0;
    }

    set(key, value, duration) {
        const exists = this.cache[key] !== undefined;

        if (exists) {
            clearTimeout(this.timeouts[key]);
            this.size--;
        }

        this.cache[key] = value;
        this.size++;

        this.timeouts[key] = setTimeout(() => {
            delete this.cache[key];
            delete this.timeouts[key];
            this.size--;
        }, duration);

        return exists;
    }

    get(key) {
        const exists = this.cache[key] !== undefined;
        return exists ? this.cache[key] : -1;
    }

    count() {
        return this.size;
    }

}