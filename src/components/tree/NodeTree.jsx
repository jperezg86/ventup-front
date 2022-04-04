import React from "react";
import Tree from "./Tree";

const NodeTree = ({ node, onClick = () => {}, deep = 0 }) => {
  return (
    <div
      className={`px-${deep}em`}
      onClick={(evt) => {
        evt.stopPropagation();
        onClick(node);
      }}
      style={{ paddingLeft: `${deep}em` }}
    >
      <span> {node?.collapsed ? ">" : "v"} </span>
      <span> {node?.title} </span>
      {!node?.collapsed && node?.childNodes && (
        <Tree
          childNodes={node?.childNodes}
          deep={deep + 1}
          onNodeClicked={(node) => {
            onClick(node,false)
            }
          }
        />
      )}
    </div>
  );
};
export default React.memo(NodeTree);
