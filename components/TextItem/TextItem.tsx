import { Form, Input } from 'antd';
import type { Rule } from 'antd/lib/form';

import React from 'react';

interface ITextItem {
  label: string;
  name: string;
  rules?: Rule[];
}

const TextItem = ({ label, name, rules }: ITextItem) => {
  return (
    <Form.Item label={label} rules={rules} name={name}>
      <Input />
    </Form.Item>
  );
};

export default TextItem;
