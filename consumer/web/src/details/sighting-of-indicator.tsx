import React from 'react';
import { DatePicker, Form as AForm, Input, Select, Typography } from 'antd';
import { Indicator, IndicatorLabelVocab, KillChainPhases, Sighting } from '../defs';
import moment from 'moment';

const { Item } = AForm;

type Props = {
  sighting: Sighting;
  indicator: Indicator;
};

const SightingOfIndicator = ({ sighting, indicator }: Props) => (
  <>
    {(sighting.first_seen ||sighting.last_seen || sighting.count) && <Typography.Title level={3}>Sighting</Typography.Title>}
    {sighting.first_seen &&
    <Item label="First seen">
      <DatePicker value={moment(sighting.first_seen)} disabled/>
    </Item>}
    {sighting.last_seen && <Item label="Last seen"><DatePicker value={moment(sighting.last_seen)} disabled/></Item>}
    {sighting.count && <Item label="Times observed">
      <Input type="number" value={sighting.count} disabled/>
    </Item>}
    <Typography.Title level={3}>Indicator</Typography.Title>
    {indicator.labels && <Item label="Labels">
      <Select mode="multiple" value={indicator.labels} disabled>
        {IndicatorLabelVocab.map(il => (
          <Select.Option key={il} value={il}>
            {il}
          </Select.Option>
        ))}
      </Select>
    </Item>}
    {indicator.name && <Item label="Name"><Input value={indicator.name} disabled/></Item>}
    {indicator.description && <Item label="Description"><Input.TextArea value={indicator.description} disabled/></Item>}
    {indicator.pattern && <Item label="Pattern">
        <Input value={indicator.pattern} disabled/>
    </Item>}
    {indicator.valid_from && <Item label="Valid from">
        <DatePicker value={moment(indicator.valid_from)} disabled/>
    </Item>}
    {indicator.valid_until && <Item label="Valid until">
      <DatePicker value={moment(indicator.valid_until)} disabled/>
    </Item>}
    {indicator.kill_chain_phases && <Item label="Kill chain phases">
        <Select mode="multiple" value={indicator.kill_chain_phases.map(x => x.phase_name)} disabled>
          {KillChainPhases.map(il => (
            <Select.Option key={il.phase_name} value={il.phase_name}>
              {il.phase_name}
            </Select.Option>
          ))}
        </Select>
    </Item>}
  </>
);

export default SightingOfIndicator;
