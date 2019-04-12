import React, { FormEvent, FormEventHandler, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Form as AForm, Input, message, Typography } from 'antd';
import { saveBundle } from './utils';

const Styled = styled.div`
  background-color: white;
  padding: 24px;
`;

const fieldFactory = (getFieldDecorator: any) => ({ rules, inputProps, fieldName, label }: any) => (
  <AForm.Item label={label}>{getFieldDecorator(fieldName, { rules })(<Input {...inputProps} />)}</AForm.Item>
);

const Form = ({ form: { getFieldDecorator, validateFieldsAndScroll, resetFields } }: any) => {
  const [loading, setLoading] = useState(false);
  const Field = useMemo(() => fieldFactory(getFieldDecorator), [getFieldDecorator]);
  const handleSubmit: FormEventHandler = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      validateFieldsAndScroll(async (err: any, values: any) => {
        if (err) return;
        setLoading(true);
        //fetch mock
        setTimeout(() => {
          console.log(values);
          resetFields();
          saveBundle(values);
          message.success('This is a message of success', 1);
          setLoading(false);
        }, 1000);
      });
    },
    [validateFieldsAndScroll]
  );

  return (
    <Styled>
      <AForm onSubmit={handleSubmit}>
        <Typography.Title>Form</Typography.Title>
        <Field rules={[{ required: true, message: 'Please input your username!' }]} label="Name" fieldName="name" />
        <Button type="primary" htmlType="submit" children="Send" loading={loading} />
      </AForm>
    </Styled>
  );
};

export default AForm.create({ name: 'form' })(Form);
