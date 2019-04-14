import { Bundle, Identity  as TIdentity, Indicator, Sighting } from '../defs';
import React from 'react';
import { Button } from 'antd';
import Identity from './identity';
import SightingOfIndicator from './sighting-of-indicator';

type Props = {
  bundle: Bundle;
  back: () => void;
};

const Details = ({ bundle, back }: Props) => {
  const sighting = bundle.objects.find(x => x.type ==='sighting');
  const indicator = bundle.objects.find(x => x.type ==='indicator');
  const notifier = bundle.objects[0];
  console.log({notifier});
  // const notifier = sighting ? bundle.objects.find(x => x.id === sighting.created_by_ref) : undefined;
  const suspect = indicator ? bundle.objects.find(x => x.id === indicator.created_by_ref) : undefined;

  return (
    <>
      <div>
        <Button onClick={back}>Back</Button>
      </div>
      {notifier && <Identity name="notifier" label="Identity - Notifier" identity={notifier as TIdentity} />}
      <SightingOfIndicator sighting={sighting as Sighting} indicator={indicator as Indicator} />
      {suspect && <Identity name="suspect" label="Identity - Suspect" identity={suspect as TIdentity}  />}
    </>
  );
};

export default Details;
