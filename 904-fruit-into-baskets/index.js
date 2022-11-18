/*
*
* 904. Fruit into baskets
* 
* When iterating from left to right, there are 3 cases:
* 1. fruit is the same as the last type of fruit
* 2. fruit is the same as the second to last type of fruit
* 3. fruit is different than the last two types
*
* On each iteration, we update:
* - first and second type
* - count of consecutive fruits of the first type (firstCount)
* - current length
* - maxiumum length so far
*/

const totalFruit = fruits => {
    let max = 0,
        curr = 0,
        firstCount = 0,
        second = 0,
        first = 0;

        for (let fruit of fruits) {
            curr = (fruit == second || fruit == first) ? curr + 1 : firstCount + 1;
            firstCount = fruit == first ? firstCount + 1 : 1;
            if (first !== fruit) {
                second = first;
                first = fruit;
            }
            max = Math.max(max, curr);
        }

        return max;
};