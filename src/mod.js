"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
class Mod {
    postDBLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const items = tables.templates.items;
        for (const item in items) {
            const itemData = items[item];
            if (this.isAmmoOrGrenade(itemData)) {
                if (itemData._props.Weight) {
                    itemData._props.Weight = 0;
                }
            }
        }
    }
    isAmmoOrGrenade(itemData) {
        // Ammo, grenade, and ammo box parent IDs
        const ids = [
            "5485a8684bdc2da71d8b4567", // Ammo
            "543be6564bdc2df4348b4568", // Grenades
            "543be5cb4bdc2deb348b4568" // Ammo boxes
        ];
        if (ids.includes(itemData._parent)) {
            return true;
        }
        return false;
    }
}
exports.mod = new Mod();
//# sourceMappingURL=mod.js.map