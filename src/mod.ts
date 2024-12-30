import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
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

    private isAmmoOrGrenade(itemData: any): boolean {
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

export const mod = new Mod();
