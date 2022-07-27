export class CouponModel {
    public id?: number;
    // categor Category?
    public category?: string;
    // ?
    // public company: Company;
    public title?: string;
    public description?: string;
    public startDate?: Date;
    public endDate?: Date;
    public amount?: number;
    public price?: number;
    // ?
    // public image: string;

    public constructor(id: number, category: string, title: string, description: string, startDate: Date, endDate: Date, amount: number, price: number) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
    }
}

export class CouponPayloadModel {

    // categor Category?
    public category?: string;
    // ?
    // public company: Company;
    public title?: string;
    public description?: string;
    public startDate?: Date;
    public endDate?: Date;
    public amount?: number;
    public price?: number;
    // ?
    // public image: string;

    public constructor(category: string, title: string, description: string, startDate: Date, endDate: Date, amount: number, price: number) {

        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
    }
}