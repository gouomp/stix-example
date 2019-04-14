import React, { FormEvent, FormEventHandler, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Form as AForm, message, Typography } from 'antd';
import { saveBundle } from '../utils';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import Identity from './identity';
import SightingOfIndicator from './sighting-of-indicator';
import { Bundle, Identity as StixIdentity, Indicator, KillChainPhases, Sighting, StixObject } from '../defs';
import uuidv4 from 'uuid/v4';

const Styled = styled.div`
  background-color: white;
  padding: 24px;
`;

const prepareBundle = (values: any): Bundle => {
  const isoDate = new Date().toISOString();
  const notifier = {
    type: 'identity',
    id: `identity-${uuidv4()}`,
    created: isoDate,
    modified: isoDate,
    ...values.notifier
  };
  const suspect = {
    type: 'identity',
    id: `identity-${uuidv4()}`,
    created: isoDate,
    modified: isoDate,
    ...values.suspect
  };

  const killChainPhases = values.indicator.kill_chain_phases;
  const indicator: Indicator = {
    type: 'indicator',
    id: `indicator-${uuidv4()}`,
    created: isoDate,
    modified: isoDate,
    created_by_ref: suspect.name ? suspect.id : undefined,
    ...values.indicator,
    kill_chain_phases: killChainPhases
      ? killChainPhases.map((phase: string) => KillChainPhases.find(x => x.phase_name === phase))
      : []
  };

  const sighting: Sighting = {
    type: 'sighting',
    id: `sighting-${uuidv4()}`,
    created: isoDate,
    modified: isoDate,
    sighting_of_ref: indicator.id,
    created_by_ref: notifier.name ? notifier.id : undefined,
    ...values.sighting
  };

  const objects: StixObject[] = [
    notifier.name && (notifier as StixIdentity),
    sighting,
    indicator,
    suspect.name && (suspect as StixIdentity)
  ].filter(x => x);

  return {
    type: 'bundle',
    id: `bundle-${uuidv4()}`,
    spec_version: '2.0',
    objects
  };
};

type Props = {
  form: WrappedFormUtils;
};

const sendBundle = (bundle: Bundle) =>
  fetch('https://cticonsumer.herokuapp.com/incident/register', {
    method: 'POST',
    body: JSON.stringify(bundle),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

const Form = (props: Props) => {
  const {
    form: { validateFieldsAndScroll, resetFields }
  } = props;
  const [loading, setLoading] = useState(false);
  const handleSubmit: FormEventHandler = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      validateFieldsAndScroll(async (err: any, values: any) => {
        if (err) return;
        setLoading(true);
        const bundle = prepareBundle(values);
        sendBundle(bundle)
          .then(() => {
            message.success('Success', 1);
            saveBundle(bundle);
            resetFields();
            setLoading(false);
          })
          .catch(() => {
            message.error('Error', 1);
            setLoading(false);
          });
      });
    },
    [validateFieldsAndScroll]
  );

  return (
    <Styled>
      <AForm onSubmit={handleSubmit}>
        <Typography.Title>Form</Typography.Title>
        <Identity name="notifier" label="Identity - Notifier" {...props} />
        <SightingOfIndicator {...props} />
        <Identity name="suspect" label="Identity - Suspect" {...props} />
        <div>
          <Button type="primary" htmlType="submit" children="Send" loading={loading} />
        </div>
      </AForm>
    </Styled>
  );
};

export default AForm.create({ name: 'form' })(Form);
