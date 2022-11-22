/*
* 253. Meeting Rooms II
* https://leetcode.com/problems/meeting-rooms-ii/description/
*
* - create separate ordered arrays for start times and end times
* - count the number of used rooms. Increment always; decrement when a meeting ends.
* - stop counting when only 'end' events are remaining.
*
*/

const minMeetingRooms = intervals => {
    let starts = intervals.map(i => i[0]).sort((a, b) => a - b),
        ends = intervals.map(i => i[1]).sort((a, b) => a - b),
        iStart = 0,
        iEnd = 0,
        used = 0;
    
    while (iStart < starts.length) {
        if (starts[iStart] >= ends[iEnd]) {
            used--;
            iEnd++;
        }
        used++;
        iStart++;
    }
    
    return used;
};