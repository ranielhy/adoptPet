// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PetType = {
  "CAT": "CAT",
  "DOG": "DOG"
};

const { Owner, Pet } = initSchema(schema);

export {
  Owner,
  Pet,
  PetType
};