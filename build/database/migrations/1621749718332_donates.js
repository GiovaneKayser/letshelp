"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Donates extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'donates';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id").primary();
            table.integer('value');
            table
                .integer('user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table
                .integer("campaign_id")
                .unsigned()
                .references("campaigns.id")
                .onDelete("CASCADE");
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Donates;
//# sourceMappingURL=1621749718332_donates.js.map