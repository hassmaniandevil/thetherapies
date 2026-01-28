import { Therapy } from '@/lib/types';
import { cbt } from './cbt';
import { cat } from './cat';
import { ba } from './ba';
import { act } from './act';
import { dbt } from './dbt';
import { schemaTherapy, cft, mbt, ipt, sfbt, eft } from './remaining';
import { tfp, fbt, cbte, mi, cbtp, net, pcit } from './specialist';
import { mst, fft, cm, fip } from './brief';

export const allTherapies: Therapy[] = [
  cbt, cat, ba, act, dbt, schemaTherapy, cft, mbt, ipt, sfbt, eft,
  tfp, fbt, cbte, mi, cbtp, net, pcit, mst, fft, cm, fip,
];

export function getTherapyBySlug(slug: string): Therapy | undefined {
  return allTherapies.find(t => t.slug === slug);
}

export function getTherapyById(id: string): Therapy | undefined {
  return allTherapies.find(t => t.id === id);
}

export function getAllTherapySlugs(): string[] {
  return allTherapies.map(t => t.slug);
}

export { cbt, cat, ba, act, dbt, schemaTherapy, cft, mbt, ipt, sfbt, eft, tfp, fbt, cbte, mi, cbtp, net, pcit, mst, fft, cm, fip };
