export type Lang = 'en' | 'ur'

export type CenterId =
  | 'karachi'
  | 'lahore'
  | 'badin'
  | 'gwadar'
  | 'muzaffargarh'

export type CpTypeId = 'spastic' | 'dyskinetic' | 'ataxic' | 'mixed'

export type EvidenceLevel = 'green' | 'amber' | 'red'

export type Profile = {
  childName: string
  age: string
  guardianName: string
  guardianContact: string
  center: CenterId
  cpType: CpTypeId
  registered: boolean
}

export type Appointment = {
  id: string
  doctorId: string
  date: string
  time: string
  mode: 'in-person' | 'virtual'
}

export type AgeBand = '0-2' | '3-5' | '6-12' | '13-17'
export type GoalId = 'mobility' | 'communication' | 'self-care' | 'comfort' | 'school'
export type AbilityId = 'sitting' | 'standing' | 'walking-aid' | 'walking'
