class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  
  addEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if(!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1].push(vertex2);
      } 
      if(!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2].push(vertex1);
      }
    }
  }
  
  removeEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(item => item !== vertex1);
    }    
  }
  
  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return;
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  
  DFSRecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    (function traverse(vertex) {
      if(!vertex) return null;
      
      visited[vertex] = true;
      results.push(vertex);
      
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return traverse(neighbor);
        }
      })
    })(start);
    
    return results;
  }
  
  DFSIterative(start) {
    const values = [];
    const stack = [start];
    const visited = {};
    
    visited[start] = true;
    
    while(stack.length) {
      const current = stack.pop();
      values.push(current);
      
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    
    return values;
  }
  
  BFS(start) {
    const queue = [start];
    const values = [];
    const visited = {};
    let current;
    
    visited[start] = true;
    
    while(queue.length) {
      current = queue.shift();
      values.push(current);
      
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    
    return values;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
