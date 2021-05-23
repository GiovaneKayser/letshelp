import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from "@ioc:Adonis/Lucid/Orm";
import Campaign from './Campaign'
import User from './User'
export default class Donate extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public value: number;

  @hasOne(() => Campaign)
  public campaign: HasOne<typeof Campaign>;

  @hasOne(() => User)
  public user: HasOne<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
