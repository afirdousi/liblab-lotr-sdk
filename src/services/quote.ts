import {BaseService} from "./base";

export class QuoteService extends BaseService{

    private readonly resource = 'quote';

    protected getResourceName(): string {
        return this.resource;
    }

    // TODO:
    //  Ideally I should add method to resolve character for the quote
    //  which would require me to implement the Character entity, skipping it
    //  on purpose to make this quick

}