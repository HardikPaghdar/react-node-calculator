import React, { FunctionComponent, useState } from "react";
import { Form, Input, Button } from "antd";
import api from "../services/API";

interface CalculatorProps {}

const Calculator: FunctionComponent<CalculatorProps> = () => {
    const [sum, setSum] = useState(0);


  const onFinishFailed = (errorInfo: any) => {
  };
  const onFinish = (values :any) => {
    api.postAddition(values)
        .then(res => {
            setSum(res.data.data.sum)
        })
        .catch(err=> {
          console.log("Error", err);
        })
  };

  return (
    <div className="calculator">
      <div className="title flex-x center">
        <div className="an-18 regular-text">CALCULATOR</div>
      </div>
      <div className="flex-x center">
        <div className="number mt60 text-center">
          <div className="an-16 regular-text mt30 light--text">
            Enter the numbers
          </div>
          <div className="flex-x center">
            <Form className="mt10 form-item" onFinish={onFinish}
                  onFinishFailed={onFinishFailed}>
              <Form.Item
                  className="" name="num1"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter valid input.',
                    },
                  ]}
              >
                <Input type="number" placeholder="number 1" />
              </Form.Item>
              <Form.Item
                  className="" name="num2"
                  rules={[
                {
                  required: true,
                  message: 'Please enter valid input.',
                },
              ]}>
                <Input type="number" placeholder="number 2" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" className="form-button mt10">
                  Sum
                </Button>
              </Form.Item>
              <hr className="hr-row mt55" />
              <div className="an-16 regular-text mt40 light--text">Results</div>
              <Form.Item>
                <Input className="results mt10" placeholder="" value={sum} />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
