import react from "react";
import React from "react";
import NodeTree from "./NodeTree";

const Tree = ({ childNodes = [], onNodeClicked = () => {}, deep = 0 }) => {

  const [nodes, setNodes] = React.useState([]);
  react.useEffect(() => {
    setNodes([...childNodes]);
  },[childNodes])

  const seekAndReplaceNode = (tree, nodeSeek) => {
    for(let i=0; i<tree.length; i ++){
      if(tree[i].id === nodeSeek.id) {
        tree[i] = nodeSeek;
        return;
      }else if(tree[i]?.childNodes?.length>0){
        seekAndReplaceNode(tree[i].childNodes, nodeSeek)
      }
    } 
  }

  const clickedOnNode = (node, bubble) => {
    if(bubble) {
     return onNodeClicked(node);
    }
    const nodesCopy = [...nodes];
    const nodeCopy = {...node};
    nodeCopy.collapsed = !nodeCopy.collapsed;
    seekAndReplaceNode(nodesCopy, nodeCopy);
    setNodes(nodesCopy);
    onNodeClicked(nodeCopy);
  }

  return (
    <>
      {nodes.map((item) => (
        <NodeTree
          node={item}
          key={item.id}
          onClick={clickedOnNode}
          deep={deep}
        />
      ))}
    </>
  );
};

export default React.memo(Tree);
