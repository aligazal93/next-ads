import * as migration_20260827_140012_add_cta_section_fields from './20260827_140012_add_cta_section_fields';

export const migrations = [
  {
    up: migration_20260827_140012_add_cta_section_fields.up,
    down: migration_20260827_140012_add_cta_section_fields.down,
    name: '20260827_140012_add_cta_section_fields'
  },
];
