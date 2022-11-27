class GraphNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
    
    addChild(node) {
        this.children.push(node);
        return this;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
    }
    
    add(val1, val2) {
        const node1 = this.nodes.get(val1) || new GraphNode(val1);
        const node2 = this.nodes.get(val2) || new GraphNode(val2);
        this.nodes.set(val1, node1.addChild(node2));
        this.nodes.set(val2, node2.addChild(node1));
    }
    
    get(val) {
        return this.nodes.get(val);
    }
}