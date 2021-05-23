import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,HasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from "./User";
import Campaign from './Campaign';
import { Has } from '@ioc:Adonis/Lucid/Relations';
export default class Ong extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public donors: HasMany<typeof User>

  @hasMany(() => User)
  public members: HasMany<typeof User>
  @hasMany(() => Campaign)
  public campaigns: HasMany<typeof Campaign>
}
