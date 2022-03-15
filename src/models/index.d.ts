import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NotificationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DevicesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Notifications {
  readonly id: string;
  readonly userID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notifications, NotificationsMetaData>);
  static copyOf(source: Notifications, mutator: (draft: MutableModel<Notifications, NotificationsMetaData>) => MutableModel<Notifications, NotificationsMetaData> | void): Notifications;
}

export declare class Devices {
  readonly id: string;
  readonly devicename?: string;
  readonly userID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Devices, DevicesMetaData>);
  static copyOf(source: Devices, mutator: (draft: MutableModel<Devices, DevicesMetaData>) => MutableModel<Devices, DevicesMetaData> | void): Devices;
}

export declare class User {
  readonly id: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly Devices?: (Devices | null)[];
  readonly Notifications?: (Notifications | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}