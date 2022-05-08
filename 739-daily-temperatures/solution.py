""" 
739. Daily Temperatures
https://leetcode.com/problems/daily-temperatures/

1. Create a list - we will use it as a monotonic stack for INDEXES of temperatures.
2. Enumerate the temperatures list T. At each iteration remove all lower
   temperatures from the end of the stack and update the result list
3. For all indexes that remain in the stack, the result will be 0.
"""

class Solution(object):
    def dailyTemperatures(self, T):
        """
        :type T: List[int]
        :rtype: List[int]
        """
        result = [0] * len(T)
        stack = []

        for i, temp in enumerate(T):
            while stack and stack[-1]["temp"] < temp:
                index = stack.pop()["i"]
                result[index] = i - index
            stack.append({ "i": i, "temp": temp })

        return result


