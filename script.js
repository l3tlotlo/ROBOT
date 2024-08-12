// The Village of Meadowfield isn't very big. it has 11 places and 14 roads between them.
// This array of roads describes Meadhowfield:

const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Shop",
  "Marketplace-Post Office",
  "Marketplace-Town Hall",
]

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

 // i . Condense the village state down to the minimal set of values that define it.
 
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcel
  }
}