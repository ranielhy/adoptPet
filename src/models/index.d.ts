import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum PetType {
  CAT = "CAT",
  DOG = "DOG"
}



type EagerOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Owner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Owner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Owner = LazyLoading extends LazyLoadingDisabled ? EagerOwner : LazyOwner

export declare const Owner: (new (init: ModelInit<Owner>) => Owner) & {
  copyOf(source: Owner, mutator: (draft: MutableModel<Owner>) => MutableModel<Owner> | void): Owner;
}

type EagerPet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly photo: string;
  readonly petType?: PetType | keyof typeof PetType | null;
  readonly Owner?: Owner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly petOwnerId?: string | null;
}

type LazyPet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly photo: string;
  readonly petType?: PetType | keyof typeof PetType | null;
  readonly Owner: AsyncItem<Owner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly petOwnerId?: string | null;
}

export declare type Pet = LazyLoading extends LazyLoadingDisabled ? EagerPet : LazyPet

export declare const Pet: (new (init: ModelInit<Pet>) => Pet) & {
  copyOf(source: Pet, mutator: (draft: MutableModel<Pet>) => MutableModel<Pet> | void): Pet;
}