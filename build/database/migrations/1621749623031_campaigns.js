"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Campaigns extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'campaigns';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.integer('xp');
            table.integer('reward');
            table.integer('objective');
            table
                .integer('ong_id')
                .unsigned()
                .references('ongs.id')
                .onDelete('CASCADE');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Campaigns;
//# sourceMappingURL=1621749623031_campaigns.js.map