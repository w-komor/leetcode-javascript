/*
* 352. Data Stream as Disjoint Intervals
* https://leetcode.com/problems/data-stream-as-disjoint-intervals/
*
*/

class UnionFind {
    constructor() {
        this.parents = {};
        this.range = {};
        this.rank = {};
    }
    
    includes(x) {
        return this.parents.hasOwnProperty(x);
    }
     
    // also responsible for make set operation
    find(x) {
        if (!this.parents.hasOwnProperty(x)) {
            this.parents[x] = x;
            this.range[x] = [x, x];
            this.rank[x] = 1;
        }
        if (this.parents[x] !== x) {
            this.parents[x] = this.find(this.parents[x]);
        }
        return this.parents[x];
    }
    
    // O(n) operation where n is the number of nodes in UF
    getAllGroups() {
        let set = new Set();
        for (let key of Object.keys(this.parents)) {
            let parent = this.find(key);
                if (!set.has(parent)) {
                    set.add(parent);
                }
            }
            // set has all the unique parents
            let intervals = [];
            for (let id of set) {
                intervals.push(this.range[id]);
            }
        return intervals;
    }
    
    union(x, y) {
        let parentX = this.find(x);
        let parentY = this.find(y);
      
        let parent = parentY, child = parentX;
      
        if (this.rank[parentX] < this.rank[parentY]) {
            // parentY becomes the parent
            this.parents[parentX] = parentY;
        } else if (this.rank[parentY] < this.rank[parentX]) {
            // parentX becomes the new parent
            this.parents[parentY] = parentX;
            [parent, child] = [child, parent];
        } else {
            // both are equal, change ranks
            this.parents[parentX] = parentY;
            this.rank[parentY] += 1;
        }
          
        // union operation also affects the ranges, represented by parentX and parentY
        let range = this.range[parent];
        range[0] = Math.min(range[0], this.range[child][0]);
        range[1] = Math.max(range[1], this.range[child][1]);
    }
}
  
class SummaryRanges {
    constructor() {
        this.uf = new UnionFind();
    }
  
    addNum(num) {
        this.uf.find(num);
        if (this.uf.includes(num - 1)) {
            this.uf.union(num, num - 1);
        }
        if (this.uf.includes(num + 1)) {
            this.uf.union(num, num + 1);
        }
    }
  
    getIntervals() {
        return this.uf.getAllGroups();
    }
}
