import { MinusCircleFilled } from "@ant-design/icons";
import {
  Button,
  Col,
  ConfigProvider,
  InputNumber,
  Row,
  Slider,
  Space,
  Statistic,
} from "antd";
import React, { useLayoutEffect, useState } from "react";
import HufmanTree from "./components/tree";
import "./index.scss";
const IntegerStep = ({ data, setDatas, index }) => {
  const [inputValue, setInputValue] = useState(data.weight);
  const onChange = async (newValue) => {
    setInputValue(newValue);
    setDatas((prevData) => {
      const newData = [...prevData];
      newData[index].weight = newValue;
      return newData;
    });
  };
  return (
    <Row>
      <div className="tag">{data.name} </div>
      <Col span={12}>
        <Slider
          min={1}
          max={30}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={30}
          style={{
            margin: "0 16px",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const Huffman = () => {
  const [show, setShow] = useState(false);

  const [Tree, setTree] = useState([]);
  const [Datas, setDatas] = useState([
    {
      code: "",
      name: "a",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
    {
      code: "",
      name: "b",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
    {
      code: "",
      name: "c",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
    {
      code: "",
      name: "d",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
    {
      code: "",
      name: "e",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
    {
      code: "",
      name: "f",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
    {
      code: "",
      name: "g",
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    },
  ]); //初始化数据
  const [WPL, setWPL] = useState(0);
  const [Str, setStr] = useState(""); //存储随机生成的编码（编码中字符的权重为出现频率）
  const [translateStr, setTranslateStr] = useState(""); //存储随机生成的编码（编码中字符的权重为出现频率）
  const [decode, setDecode] = useState(""); //存储解码后的字符串
  const computeWPL = () => {
    let tree = [...Datas];
    let WPL = 0;
    for (let i = 0; i < tree.length; i++) {
      WPL += tree[i].weight * tree[i].code.length;
    }
    return WPL;
  };

  const handleInitstr = async () => {
    let randomString = "";
    Datas.forEach((item) => {
      const { name, weight } = item;
      for (let i = 0; i < weight; i++) {
        randomString += name;
      }
    });
    // 将随机字符串转换为数组
    const charArray = randomString.split("");
    // 对数组进行洗牌操作
    for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    // 将数组转换回字符串
    const shuffledString = charArray.join("");
    setStr(shuffledString);
    let translateStr = "";
    for (let i = 0; i < shuffledString.length; i++) {
      Datas.forEach((item) => {
        if (item.name === shuffledString[i]) {
          translateStr += item.code;
        }
      });
    }
    setTranslateStr(translateStr);
  };

  //创建哈夫曼树

  const crtHuffmanTree = () => {
    // 创建辅助数组
    let treeNodes = [...Datas];
    let treeNodes_ = [...Datas];
    setTree([]);

    // 按照节点的权重进行升序排序
    treeNodes.sort((a, b) => a.weight - b.weight);

    while (treeNodes.length > 1) {
      // 取出权重最小的两个节点
      const node1 = treeNodes.shift();
      const node2 = treeNodes.shift();

      // 选择较小的节点作为左子节点，较大的节点作为右子节点
      const lchild = node1.weight < node2.weight ? node1 : node2;
      const rchild = node1.weight < node2.weight ? node2 : node1;

      // 创建新节点
      const newNode = {
        code: "",
        name: lchild.name + rchild.name,
        weight: lchild.weight + rchild.weight,
        parent: 0,
        lchild: 0,
        rchild: 0,
      };

      // 将新节点的左子节点和右子节点设置为 lchild 和 rchild
      newNode.lchild = lchild;
      newNode.rchild = rchild;

      // 更新父节点信息
      lchild.parent = newNode;
      rchild.parent = newNode;

      // 将新节点添加到数组中
      treeNodes.push(newNode);
      treeNodes_.push(newNode);

      // 按照节点的权重进行升序排序
      treeNodes.sort((a, b) => a.weight - b.weight);
      treeNodes_.sort((a, b) => a.weight - b.weight);
    }

    // 最后剩下的节点即为赫夫曼树的根节点
    const huffmanTree = treeNodes[0];

    // 生成编码
    generateCodes(huffmanTree, "");
    // generateReverseCodes(treeNodes_);

    // 输出赫夫曼树的信息
    console.log(huffmanTree);

    traverse(huffmanTree);
    handleInitstr(); // 初始化字符串
    setWPL(computeWPL());
  };
  //采用先序遍历来访问树（重点递归调用）
  const traverse = (node) => {
    if (node) {
      // 先处理左子树
      traverse(node.lchild);
      // 再处理右子树
      traverse(node.rchild);
      // 最后处理当前节点
      console.log("节点", node.weight, node.name, node.code);
      setTree((prevTree) => [...prevTree, node]);
    }
  };
  //正向编码：根节点到叶子节点
  const generateCodes = (node, code) => {
    if (node) {
      // 设置节点的编码
      node.code = code;

      // 递归处理左子树和右子树
      generateCodes(node.lchild, code + "0");
      generateCodes(node.rchild, code + "1");
    }
  };

  //逆向编码：叶子节点到根节点
  const ReverseCodes = (node, node_, code) => {
    if (node.parent) {
      if (node.parent.lchild === node) {
        ReverseCodes(node.parent, node_, "0" + code);
        console.log(111);
      }
      if (node.parent.rchild === node) {
        ReverseCodes(node.parent, node_, "1" + code);
        console.log(222);
      }
    } else {
      node_.code = code;
      console.log(node_.name, node_.code);
    }
  };

  const generateReverseCodes = (nodes) => {
    console.log("nodes", nodes);
    for (let i = 0; i < nodes.length; i++) {
      console.log(nodes[i]);
      nodes[i].code = "";
      let code = "";
      if (nodes[i].parent) {
        if (nodes[i].parent.lchild === nodes[i]) {
          ReverseCodes(nodes[i].parent, nodes[i], "0" + code);
        }
        if (nodes[i].parent.rchild === nodes[i]) {
          ReverseCodes(nodes[i].parent, nodes[i], "1" + code);
        }
      }
    }
    console.log("nodes", nodes);
  };

  const handleAdd = () => {
    var ch = String.fromCharCode("a".charCodeAt() + Datas.length);
    var name = ch.charAt();
    const data = {
      code: "",
      name: name,
      weight: Math.ceil(Math.random() * 30),
      parent: 0,
      lchild: 0,
      rchild: 0,
    };
    setDatas([...Datas, data]);
  };

  // 删除数据<data>（删除后视图被继承但权重没被继承）
  const handleDelete = (index) => {
    setDatas((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };
  const handleDecode = () => {
    let decode = "";
    for (let i = 0, str = ""; i < translateStr.length; i++) {
      str += translateStr[i];
      Datas.forEach((item) => {
        if (item.code === str) {
          decode += item.name;
          str = "";
        }
      });
    }
    setDecode(decode);
  };
  //解码函数（每个字符的前缀一定是不相同的，利用该特性完成解码）
  useLayoutEffect(() => {
    console.log(Datas);
    console.log("Tree", Tree);
  }, [Datas, Tree]); //动态加载页面

  return (
    <div className="huffman-box">
      <div className="data-box">
        <ConfigProvider
          token={{
            Statistic: {
              titleFontSize: 20,
              contentFontSize: 28,
              fontSize: 20,
            },
          }}
        >
          <Col span={2}>
            <Statistic title="WPL" value={WPL} />
          </Col>
        </ConfigProvider>
        {Datas.map((item, index) => {
          return (
            <div key={index} className="data-row">
              <IntegerStep
                data={item}
                setDatas={setDatas}
                index={index}
                weight={item.weight}
              />
              <Button
                type="link"
                danger
                className="delete-button"
                onClick={() => handleDelete(index)}
                disabled
              >
                <MinusCircleFilled />
              </Button>
            </div>
          );
        })}

        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: "#00b96b",
              borderRadius: 5,

              // 派生变量，影响范围小
              colorBgContainer: "#f6ffed",
            },
          }}
        >
          <Space className="button-box">
            <Button type="primary" block onClick={handleAdd}>
              添加
            </Button>
            <Button
              type="primary"
              block
              onClick={() => {
                crtHuffmanTree();
                console.log("datas", Datas);
                setShow(true);
              }}
            >
              编码
            </Button>
            <Button type="primary" block onClick={handleDecode}>
              解码
            </Button>
            <Button
              type="primary"
              block
              onClick={() => {
                window.location.reload();
              }}
            >
              刷新
            </Button>
          </Space>
        </ConfigProvider>
      </div>
      {show ? (
        <div className="result-box">
          <div className="code-box">
            {Datas.map((item, index) => {
              return (
                <p key={index} className="code-row">
                  {item.name} : {item.code}
                </p>
              );
            })}
          </div>
          <HufmanTree Tree={Tree} />
          <div className="str-box">
            <h3>字符串:</h3>
            <div>{Str}</div>
            <h3>编译码串:</h3>
            <div>{translateStr}</div>
            <h3>解码串:</h3>
            <div>{decode}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Huffman;
