export const model = {
    "key": 1345,
    "connections": [
      {
        "key": [
          -1,
          0
        ],
        "weight": -2.4072552915664134,
        "enabled": true
      },
      {
        "key": [
          -1,
          1
        ],
        "weight": 0.2929992244735387,
        "enabled": true
      },
      {
        "key": [
          -2,
          0
        ],
        "weight": -1.3803158061535061,
        "enabled": true
      },
      {
        "key": [
          -2,
          2
        ],
        "weight": 3.486582575578306,
        "enabled": true
      },
      {
        "key": [
          -3,
          0
        ],
        "weight": -0.4799578250595921,
        "enabled": true
      },
      {
        "key": [
          -3,
          1
        ],
        "weight": 1.355289092452095,
        "enabled": true
      },
      {
        "key": [
          -3,
          2
        ],
        "weight": -2.514600672860394,
        "enabled": true
      }
    ],
    "nodes": [
      {
        "key": 0,
        "bias": 4.75475725650758,
        "response": 1.0,
        "activation": "relu",
        "aggregation": "sum"
      },
      {
        "key": 1,
        "bias": 2.7011437557258136,
        "response": 1.0,
        "activation": "relu",
        "aggregation": "sum"
      },
      {
        "key": 2,
        "bias": 4.3498882042834355,
        "response": 1.0,
        "activation": "relu",
        "aggregation": "sum"
      }
    ],
    "fitness": 47
  }

  export const activateRelu = (x: number) => Math.max(0, x);

  export const feedForward = (inputs: number[], model: any) => {
    const nodeOutputs: { [key: number]: number } = {};

    for (let i = -3; i <= -1; i++) {
      nodeOutputs[i] = inputs[Math.abs(i) - 1];
    }
  
    model.nodes.forEach((node: any) => {
      const connections = model.connections.filter(
        (conn: any) => conn.enabled && conn.key[1] === node.key
      );
      let sum = node.bias;
  
      connections.forEach((conn: any) => {
        sum += nodeOutputs[conn.key[0]] * conn.weight;
      });
  
      nodeOutputs[node.key] = activateRelu(sum * node.response);
    });
  
    return model.nodes.map((node: any) => nodeOutputs[node.key]);
  };