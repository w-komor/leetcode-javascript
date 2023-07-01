/*
* 2618. Check If ObjectInstance of Class
* https://leetcode.com/problems/check-if-object-instance-of-class/
*/

const checkIfInstanceOf = (obj, classFunction) => {
    if (obj === null || obj === undefined) return false;
    if (obj.constructor === classFunction) return true;
    return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction);
};