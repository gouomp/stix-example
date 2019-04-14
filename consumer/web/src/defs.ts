type identifier = string;
type timestamp = string;
type integer = number;
//?
type openVocab = string;
type killChainPhase = {
  kill_chain_name: 'lockheed-martin-cyber-kill-chain';
  phase_name: string;
};

export type StixObject = {
  type: string;
  id: identifier;
  created_by_ref?: identifier;
  created: timestamp;
  modified: timestamp;
  revoked?: timestamp;
  labels?: string[];
};

export const IdentityClassVocab: openVocab[] = ['individual', 'group', 'organization', 'class', 'unknown'];
export const IndustrySectorVocab: openVocab[] = [
  'agriculture',
  'aerospace',
  'automotive',
  'communications',
  'construction',
  'defence',
  'education',
  'energy',
  'entertainment',
  'financial-services',
  'government-national',
  'government-regional',
  'government-local',
  'government-public-services',
  'healthcare',
  'hospitality-leisure',
  'infrastructure',
  'insurance',
  'manufacturing',
  'mining',
  'non-profit',
  'pharmaceuticals',
  'retail',
  'technology',
  'telecommunications',
  'transportation',
  'utilities'
];
export const IndicatorLabelVocab: openVocab[] = [
  'anomalous-activity',
  'anonymization',
  'benign',
  'compromised',
  'malicious-activity',
  'attribution'
];
export const KillChainPhases: killChainPhase[] = [
  { phase_name: 'reconnaissance', kill_chain_name: 'lockheed-martin-cyber-kill-chain' },
  { phase_name: 'weaponization', kill_chain_name: 'lockheed-martin-cyber-kill-chain' },
  { phase_name: 'delivery', kill_chain_name: 'lockheed-martin-cyber-kill-chain' },
  { phase_name: 'exploitation', kill_chain_name: 'lockheed-martin-cyber-kill-chain' },
  { phase_name: 'installation', kill_chain_name: 'lockheed-martin-cyber-kill-chain' },
  { phase_name: 'command-and-control', kill_chain_name: 'lockheed-martin-cyber-kill-chain' },
  { phase_name: 'actions-on-objectives', kill_chain_name: 'lockheed-martin-cyber-kill-chain' }
];
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
