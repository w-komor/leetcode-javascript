/*
* 2305. Fair Distribution of Cookies
* https://leetcode.com/problems/fair-distribution-of-cookies/
*
*/

function distributeCookies(cookies, k) {
    let sum = new Array(k).fill(0);
    let result = Infinity;

    const dist = n => {
        if (n === cookies.length) {
           const max = Math.max(...sum);
           result = Math.min(result, max);
           return;
        }
        for (let i = 0; i < k; i++) {
           sum[i] += cookies[n];
           dist(n + 1);
           sum[i] -= cookies[n];
       }
   }
   
   dist(0);
   return result;
};
