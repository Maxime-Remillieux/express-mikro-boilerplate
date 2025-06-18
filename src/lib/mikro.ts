import { MikroORM } from '@mikro-orm/postgresql';
import mikroConfig from '../config/mikro-orm.config';

export const mikroOrmInit = async () => {
  const orm = await MikroORM.init(mikroConfig);
  const generator = orm.getSchemaGenerator();
  await generator.updateSchema();
  return orm;
};