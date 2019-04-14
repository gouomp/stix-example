import React, { useState } from 'react';
import { Checkbox, Form as AForm, Input, Select, Typography } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { IdentityClassVocab, IndustrySectorVocab, KillChainPhases } from '../defs';

const { Item } = AForm;

type Props = {
  form: WrappedFormUtils;
  name: string;
  label: string;
};
const Identity = ({ form: { getFieldDecorator }, name, label }: Props) => {
  const [showForm, setShowForm] = useState(true);
  return (
    <>
      <Typography.Title level={3}>{label}</Typography.Title>
      <Checkbox checked={showForm} onChange={e => setShowForm(e.target.checked)}>
        I know info about this identity
      </Checkbox>
      {showForm && (
        <>
          <Item label="Name">
            {getFieldDecorator(`${name}.name`, { rules: [{ required: true, message: 'Please input name!' }] })(
              <Input />
            )}
          </Item>
          <Item label="Description">{getFieldDecorator(`${name}.description`)(<Input.TextArea />)}</Item>
          <Item label="Identity Class">
            {getFieldDecorator(`${name}.identity_class`, {
              rules: [
                {
                  required: true,
                  message: 'Please select identity class'
                }
              ]
            })(
              <Select defaultValue="unknown">
                {IdentityClassVocab.map(ic => (
                  <Select.Option key={ic} value={ic}>
                    {ic}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Item>
          <Item label="Sector">
            {getFieldDecorator(`${name}.sectors`)(
              <Select mode="multiple" defaultValue={[]}>
                {IndustrySectorVocab.map(is => (
                  <Select.Option key={is} value={is}>
                    {is}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Item>
          <Item label="Contact Information">{getFieldDecorator(`${name}.contact_information`)(<Input />)}</Item>
          <Item label="Labels">{getFieldDecorator(`${name}.labels`)(<Select mode="tags" defaultValue={[]} />)}</Item>
        </>
      )}
    </>
  );
};

export default Identity;
