import "./index.scss";
const HufmanTree = ({ Tree }) => {
  const classNames = require("classnames");

  // 创建辅助数组
  let treeNodes = [...Tree];

  // 按照节点的权重进行升序排序
  treeNodes.sort((a, b) => a.code.length - b.code.length);
  return (
    <div className={classNames("container")}>
      <div className={classNames("child")}>
        <div className={classNames("child-zero")}>
          {treeNodes[0].code === "" ? (
            <p>{treeNodes[0].weight}</p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className={classNames("child")}>
        <div className={classNames("child-first")}>
          {treeNodes[1].code === "0" ? (
            <p>{treeNodes[1].weight}</p>
          ) : (
            <div></div>
          )}
        </div>{" "}
        <div className={classNames("child-first")}>
          {treeNodes[2].code === "1" ? (
            <p>{treeNodes[2].weight}</p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className={classNames("child")}>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return (
              <>{item.code === "00" ? <p>{item.weight}</p> : <div></div>}</>
            );
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return (
              <>{item.code === "01" ? <p>{item.weight}</p> : <div></div>}</>
            );
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return (
              <>{item.code === "10" ? <p>{item.weight}</p> : <div></div>}</>
            );
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
      </div>
      <div className={classNames("child")}>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-second")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
      </div>
      <div className={classNames("child")}>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "0111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "1111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
      </div>

      <div className={classNames("child")}>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "00111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "01111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "10111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11000" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11001" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11010" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11011" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11100" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11101" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11110" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
        <div className={classNames("child-four")}>
          {treeNodes.map((item, index) => {
            return <>{item.code === "11111" ? <p>{item.weight}</p> : ""}</>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HufmanTree;
