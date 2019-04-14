import React from 'react';
import { Form as AForm, Input, Select, Typography } from 'antd';
import { Identity as TIdentity, IdentityClassVocab, IndustrySectorVocab } from '../defs';

const { Item } = AForm;

type Props = {
  identity: TIdentity;
  name: string;
  label: string;
};
const Identity = ({ name, label, identity }: Props) => {
  return (
    <>
      <Typography.Title level={3}>{label}</Typography.Title>
      {identity.name && <Item label="Name">
        <Input value={identity.name} disabled/>
      </Item>}
      {identity.description && <Item label="Description">
        <Input.TextArea value={identity.description} disabled/>
      </Item>}
      {identity.identity_class && <Item label="Identity Class">
        <Select value={identity.identity_class} disabled>
          {IdentityClassVocab.map(ic => (
            <Select.Option key={ic} value={ic}>
              {ic}
            </Select.Option>
          ))}
        </Select>
      </Item>}
      {identity.sectors && <Item label="Sector">
        <Select mode="multiple" value={identity.sectors} disabled>
          {IndustrySectorVocab.map(is => (

            <Select.Option key={is} value={is}>
              {is}
            </Select.Option>
          ))}
        </Select>
      </Item>}
      {identity.contact_information && <Item label="Contact Information">
        <Input value={identity.contact_information} disabled/>
      </Item>}
      {identity.labels && <Item label="Labels">
        <Select mode="tags" value={identity.labels} disabled/>
      </Item>}
    </>
  );
};

export default Identity;
