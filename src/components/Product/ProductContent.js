import { Button, Card, Input, message } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useState } from "react";
import { UilAdjustHalf } from "@iconscout/react-unicons";
import "./ProductContent.css";
export default function ProductContent() {
  const detail = {
    name: "Ram",
    price: 200,
    description: "Ram 8gb",
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  };
  const [qualify, setQualify] = useState(1);
  const increment = () => {
    setQualify(qualify + 1);
  };
  const decrement = () => {
    if (qualify > 1) {
      setQualify(qualify - 1);
    } else {
      message.error("Số lượng sản phẩm không được ít hơn 1");
    }
  };
  const handleCart = () => {
    console.log({
      name: detail.name,
      qualify: qualify,
    });
  };
  return (
    <div>
      <Card
        style={{ width: 350, height: 740 }}
        cover={<img alt="example" src={detail.img} />}
      >
        <Meta title={detail.name} description={detail.description} />
        <p>
          <UilAdjustHalf />
          {detail.price}
        </p>
      </Card>
      <Button type="primary" onClick={() => {}}>
        Mua hàng ngay
      </Button>
      <br />
      <Button onClick={decrement}>-</Button>
      <Input
        value={qualify}
        onInput={(e) => {
          setQualify(e.target.value);
        }}
      ></Input>
      <Button onClick={increment}>+</Button>
      <Button type="primary" onClick={handleCart}>
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
}
