// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notifications, Devices, User } = initSchema(schema);

export {
  Notifications,
  Devices,
  User
};