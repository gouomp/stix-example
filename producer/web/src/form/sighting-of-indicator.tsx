import React, { useState } from 'react';
import { DatePicker, Form as AForm, Input, Select, Typography } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { IndicatorLabelVocab, IndustrySectorVocab, KillChainPhases } from '../defs';

const { Item } = AForm;

type Props = {
  form: WrappedFormUtils;
};

const SightingOfIndicator = ({ form: { getFieldDecorator } }: Props) => (
  <>
    <Typography.Title level={3}>Sighting</Typography.Title>
    <Item label="First seen">{getFieldDecorator(`sighting.first_seen`)(<DatePicker />)}</Item>
    <Item label="Last seen">{getFieldDecorator(`sighting.last_seen`)(<DatePicker />)}</Item>
    <Item label="Times observed">
      {getFieldDecorator(`sighting.count`, { normalize: v => Math.floor(+v) })(<Input type="number" />)}
    </Item>
    <Typography.Title level={3}>Indicator</Typography.Title>
    <Item label="Labels">
      {getFieldDecorator(`indicator.labels`)(
        <Select mode="multiple" defaultValue={[]}>
          {IndicatorLabelVocab.map(il => (
            <Select.Option key={il} value={il}>
              {il}
            </Select.Option>
          ))}
        </Select>
      )}
    </Item>
    <Item label="Name">{getFieldDecorator(`indicator.name`)(<Input />)}</Item>
    <Item label="Description">{getFieldDecorator(`indicator.description`)(<Input.TextArea />)}</Item>
    <Item label="Pattern">
      {getFieldDecorator(`indicator.pattern`, { rules: [{ required: true, message: 'Please input pattern!' }] })(
        <Input />
      )}
    </Item>
    <Item label="Valid from">
      {getFieldDecorator(`indicator.valid_from`, { rules: [{ required: true, message: 'Please input date!' }] })(
        <DatePicker />
      )}
    </Item>
    <Item label="Valid until">{getFieldDecorator(`indicator.valid_until`)(<DatePicker />)}</Item>
    <Item label="Kill chain phases">
      {getFieldDecorator(`indicator.kill_chain_phases`)(
        <Select mode="multiple" defaultValue={[]}>
          {KillChainPhases.map(il => (
            <Select.Option key={il.phase_name} value={il.phase_name}>
              {il.phase_name}
            </Select.Option>
          ))}
        </Select>
      )}
    </Item>
  </>
);

export default SightingOfIndicator;
