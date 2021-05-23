"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Ongs extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'ongs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("description").notNullable();
            table
                .integer("donor_id")
                .unsigned()
                .references('users.id')
                .onDelete("CASCADE");
            table
                .integer('member_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Ongs;
//# sourceMappingURL=1621748614255_ongs.js.map