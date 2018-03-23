import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Http } from "@angular/http";
import { TextField } from "ui/text-field";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    datatrn = [];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.itemService.getdataTransport()
            .subscribe((res) => {
                this.datatrn = res;
               // console.log(this.datatrn)
            }, 
            (err)=>console.log("Something went wrong "+err)
        );
    }
}