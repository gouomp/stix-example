type identifier = string;
type timestamp = Date;
type integer = number;
//?
type openVocab = string;
type killChainPhase = string;

export type StixObject = {
  type: string;
  id: identifier;
  created_by_ref?: identifier;
  created: timestamp;
  modified: timestamp;
  revoked?: timestamp;
  labels?: string[];
};

export type Identity = StixObject & {
  type: 'identity';
  name: string;
  description?: string;
  identity_class: openVocab;
  sectors?: openVocab[];
  contact_information: string;
};

export type Sighting = StixObject & {
  type: 'sighting';
  first_seen?: timestamp;
  last_seen?: timestamp;
  count?: integer;
  sighting_of_ref: identifier;
  observed_data_refs: identifier[];
  where_sighted_refs: identifier[];
  summary: boolean;
};
export type Indicator = StixObject & {
  type: 'indicator';
  labels: openVocab[];
  name?: string;
  description?: string;
  pattern: string;
  valid_from: timestamp;
  valid_until?: timestamp;
  kill_chain_phases: killChainPhase[];
};
export type Bundle = {
  type: 'bundle';
  id: identifier;
  spec_version: '2.0';
  objects: StixObject[];
};
