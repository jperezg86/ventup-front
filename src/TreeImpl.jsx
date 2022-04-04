import React from "react";
import Tree from "./components/tree/Tree";

const TreeImpl = () => {
  const [nodes, setNodes] = React.useState([]);

  // const getRandomChildNodes = (quantity = 2, parentNode = null, deep = 0) => {
  //   const randomChildNodes = [];
  //   for (let i = 0; i < quantity; i++) {
  //     const nodeId = Math.random();
  //     randomChildNodes.push({
  //       path: !parentNode ? `/${nodeId}` : `/${parentNode?.id}/${nodeId}`,
  //       id: nodeId,
  //       deep,
  //       title: `node-${nodeId}`,
  //       collapsed: true,
  //       selected: false,
  //     });
  //   }
  //   return randomChildNodes;
  // };

  React.useEffect(() => {
    setNodes([
      {
        id: Math.random(),
        title: "root node",
        collapsed: true,
        childNodes: [
          { id: Math.random(), title: "root node child-01", collapsed: true },
          { id: Math.random(), title: "root node child-02", collapsed: true },
          { id: Math.random(), title: "root node child-03", collapsed: true },
        ],
      },
      {
        id: Math.random(),
        title: "another root node",
        collapsed: true,
        childNodes: [
          {
            id: Math.random(),
            title: "another root node child-01",
            collapsed: true,
            childNodes: [
              {
                id: Math.random(),
                title: "another root node child-01 child-01",
                collapsed: true,
              },
            ],
          },
          {
            id: Math.random(),
            title: "another root node child-02",
            collapsed: true,
          },
          {
            id: Math.random(),
            title: "another root node child-03",
            collapsed: true,
          },
        ],
      },
    ]);
  }, []);

  const onNodeClicked = (node) => {
    console.log(node);
  };

  return <Tree childNodes={nodes} onNodeClicked={onNodeClicked} />;
};

export default TreeImpl;
