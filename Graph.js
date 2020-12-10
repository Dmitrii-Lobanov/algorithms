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
}

const graph = new Graph();
graph.addVertex('first');
graph.addVertex('second');
graph.addVertex('third');

graph.addEdge('first', 'third');
graph.addEdge('first', 'second');
graph.addEdge('first', 'second');

graph.removeVertex('first')

graph.adjacencyList
